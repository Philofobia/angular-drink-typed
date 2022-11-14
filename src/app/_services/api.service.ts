import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs';
import {
  RestApiCocktailByName,
  RestApidrinksByName,
  CocktailByName,
  RestApiCocktailById,
  RestApiDrinkById,
  DrinkById,
} from '../core/models';
import { sortingDrinkByName, handleMapping } from '../core/logicFunctions';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getDrinksByName = (query: string) => {
    return this.httpClient
      .get<RestApiCocktailByName>(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      )
      .pipe(
        filter((res) => res.drinks !== null),
        map((res: RestApiCocktailByName) => {
          const drinkAPI: RestApidrinksByName[] = sortingDrinkByName(
            res.drinks
          );
          const drink: CocktailByName[] = drinkAPI.map(
            (el: RestApidrinksByName) => ({
              id: el.idDrink,
              name: el.strDrink,
              category: el.strCategory,
              image: el.strDrinkThumb,
            })
          );
          return drink;
        })
      );
  };

  getCocktailById = (id: string) => {
    return this.httpClient
      .get<RestApiCocktailById>(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      .pipe(
        map((res: RestApiCocktailById) => {
          const drinkApi: RestApiDrinkById = res.drinks[0];
          const drink: DrinkById = handleMapping(drinkApi);
          return drink;
        })
      );
  };

  getCocktailByFirstLetter = (firstLetter: string) => {
    return this.httpClient
      .get<RestApiCocktailByName>(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`
      )
     // .pipe(filter((res) => res.drinks !== null)) si possono usare più pipe o
     // mettere i metodi nello stesso pipe
      .pipe(
        filter((res) => res.drinks !== null),
        map((res) => {
          const drinkAPI: RestApidrinksByName[] = sortingDrinkByName(
            res.drinks
          );
          const drink: CocktailByName[] = drinkAPI.map(
            (el: RestApidrinksByName) => ({
              id: el.idDrink,
              name: el.strDrink,
              category: el.strCategory,
              image: el.strDrinkThumb,
            })
          );
          return drink;
        })
      );
  };
}

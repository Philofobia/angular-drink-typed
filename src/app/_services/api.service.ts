import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { RestApiCocktailByName, RestApidrinksByName, CocktailByName, RestApiCocktailById, RestApiDrinkById, DrinkById } from '../core/models';
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
        map((res: RestApiCocktailByName) => {
          const drinkAPI: RestApidrinksByName[] = sortingDrinkByName(
            res.drinks
          );
          const drink: CocktailByName[] = drinkAPI.map((el: RestApidrinksByName) => ({
            id: el.idDrink,
            name: el.strDrink,
            category: el.strCategory,
            image: el.strDrinkThumb,
          }))
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
}

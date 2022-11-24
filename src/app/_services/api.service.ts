import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, filter, catchError } from 'rxjs';
import {
  RestApiCocktailByName,
  RestApidrinksByName,
  CocktailByName,
  RestApiCocktailById,
  RestApiDrinkById,
  DrinkById,
  RestApiListIngredients,
  RestApiListIngDrinks,
  ListIngredients,
  RestApiIngredient,
  RestApiDrinkByIngDrinks,
  RestApiDrinksByIng,
  DrinksByIng,
} from '../core/models';
import {
  sortingDrinkByName,
  handleMapping,
  sortIngredientListByLetter,
} from '../core/logicFunctions';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

  getDrinksByName = (query: string) => {
    return this.httpClient
      .get<RestApiCocktailByName>(`${this.BASE_URL}/search.php?s=${query}`)
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
      .get<RestApiCocktailById>(`${this.BASE_URL}/lookup.php?i=${id}`)
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
        `${this.BASE_URL}/search.php?f=${firstLetter}`
      )
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

  getIngredientsList = () => {
    return this.httpClient
      .get<RestApiListIngDrinks>(`${this.BASE_URL}/list.php?i=list`)
      .pipe(
        map((res) => {
          const sortedIngList = sortIngredientListByLetter(res.drinks);
          const fIngList: ListIngredients[] = sortedIngList.map(
            (el: RestApiListIngredients) => ({
              ingredient: el.strIngredient1,
            })
          );
          return fIngList;
        })
      );
  };

  getIngredientDetails = (input: string) => {
    return this.httpClient
      .get<RestApiIngredient>(`${this.BASE_URL}/search.php?i=${input}`)
      .pipe(
        map((res) => {
          const ingDescription = res.ingredients[0];
          return ingDescription;
        })
      );
  };

  getDrinksByIngredients = (input: string) => {
    return this.httpClient
      .get<RestApiDrinkByIngDrinks>(`${this.BASE_URL}/filter.php?i=${input}`)
      .pipe(
        map((res) => {
          const RestApiDrinksByIng: RestApiDrinksByIng[] = res.drinks;
          const DrinksByIng: DrinksByIng[] = RestApiDrinksByIng.map(
            (el: RestApiDrinksByIng) => ({
              name: el.strDrink,
              image: el.strDrinkThumb,
              id: el.idDrink,
            })
          );
          return DrinksByIng;
        })
      );
  };
}

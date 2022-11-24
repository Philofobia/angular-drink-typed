import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { forkJoin, map, Observable } from 'rxjs';
import { ResolveIngredientObject } from 'src/app/core/models';
import { ApiService } from 'src/app/_services/api.service';

@Injectable({
  providedIn: 'root',
})
export class IngrDetailsResolver implements Resolve<ResolveIngredientObject> {
  constructor(private apiService: ApiService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<ResolveIngredientObject> {
    return forkJoin([
      this.apiService.getIngredientsList(),
      this.apiService.getIngredientDetails(route.paramMap.get('ingredient')!),
      this.apiService.getDrinksByIngredients(route.paramMap.get('ingredient')!),
    ]).pipe(
      map((res) => {
        return {
          ingredientsList: res[0],
          ingredientDetails: res[1],
          ingredientDrinks: res[2],
        };
      })
    );
  }
}

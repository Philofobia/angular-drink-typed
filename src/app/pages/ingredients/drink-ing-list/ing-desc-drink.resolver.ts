import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, forkJoin, map } from 'rxjs';
import { ApiService } from 'src/app/_services/api.service';
import { ResolveIngredientObject } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class IngDescDrinkResolver implements Resolve<ResolveIngredientObject> {
  constructor(private apiService: ApiService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<ResolveIngredientObject> {
    return forkJoin([
      this.apiService.getIngredientDetails(route.paramMap.get('ingredient')!),
      this.apiService.getDrinksByIngredients(route.paramMap.get('ingredient')!),
    ]).pipe(
      map((res) => {
        return {
          ingredientDetails: res[0],
          ingredientDrinks: res[1],
        };
      })
    );
  }
}

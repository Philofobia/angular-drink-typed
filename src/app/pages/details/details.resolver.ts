import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DrinkById } from 'src/app/core/models';
import { ApiService } from 'src/app/_services/api.service';

@Injectable({
  providedIn: 'root',
})
export class DetailsDrinkByIdResolver implements Resolve<DrinkById> {
  constructor(private apiService: ApiService) {}
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<DrinkById> {
    return this.apiService.getCocktailById(route.paramMap.get('idDrink')!);
  }
}

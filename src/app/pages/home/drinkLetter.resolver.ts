import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CocktailByName } from 'src/app/core/models';
import { ApiService } from 'src/app/_services/api.service';

@Injectable({
  providedIn: 'root',
})
export class HomeDrinkByFirstLetterResolver implements Resolve<CocktailByName[]> {
  constructor(private apiService: ApiService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<CocktailByName[]> {
    return this.apiService.getCocktailByFirstLetter(
      route.paramMap.get('letterPag') || 'A');
  }
}


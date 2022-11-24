import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CocktailByName } from 'src/app/core/models';
import { ApiService } from 'src/app/_services/api.service';

@Injectable({
  providedIn: 'root',
})
export class SearchResolver implements Resolve<CocktailByName[] | string> {
  constructor(private apiService: ApiService) {}
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<CocktailByName[]> | string {
    const search = route.paramMap.get('search');
    console.log(search)
    if (search !== null) {
      return this.apiService.getDrinksByName(search);
    } else {
      return 'NO_SEARCH_MADE';
    }
  }
}

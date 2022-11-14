import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { CocktailByName } from 'src/app/core/models';
import { ApiService } from 'src/app/_services/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<CocktailByName[]> {
  constructor(private apiService: ApiService, private router: Router){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CocktailByName[]> {
    return this.apiService.getCocktailByFirstLetter(route.params?.['letterPag']);
  }
}
//https://www.youtube.com/watch?v=BLLO2x7_R5M
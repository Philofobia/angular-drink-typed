import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/_services/api.service';
import { ListIngredients } from 'src/app/core/models';

@Injectable({
  providedIn: 'root',
})
export class IngrDetailsResolver implements Resolve <ListIngredients[]> {
  constructor(private apiService: ApiService) {}
  resolve(): Observable<ListIngredients[]> {
    return this.apiService.getIngredientsList()
  }
}

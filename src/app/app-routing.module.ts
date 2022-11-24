import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { DetailsDrinkByIdResolver } from './pages/details/details.resolver';
import { HomeComponent } from './pages/home/home.component';
import { HomeDrinkByFirstLetterResolver } from './pages/home/drinkLetter.resolver';
import { SearchResolver } from './pages/home/search.resolver';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { IngrDetailsResolver } from './pages/ingredients/ingr-details.resolver';

const routes: Routes = [
  {
    path: 'home/:letterPag',
    component: HomeComponent,
    resolve: {
      letterPag: HomeDrinkByFirstLetterResolver,
    },
  },
  {
    path: 'home/:letterPag/:search',
    component: HomeComponent,
    resolve: {
      letterPag: HomeDrinkByFirstLetterResolver,
      search: SearchResolver,
    },
  },
  {
    path: 'drink/:idDrink',
    component: DetailsComponent,
    resolve: {
      idDrink: DetailsDrinkByIdResolver,
    },
  },
  {
    path: 'ingredient/:ingredient',
    component: IngredientsComponent,
    resolve: {
      ingredient: IngrDetailsResolver,
    },
  },
  { path: 'ingredient', redirectTo: 'ingredient/vodka', pathMatch: 'full' },
  { path: 'home', redirectTo: 'home/A', pathMatch: 'full' },
  { path: '', redirectTo: 'home/A', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
 { path: "home/A", component: HomeComponent },
 { path: "home/:letterPag/:search", component: HomeComponent},
 { path: 'home/:letterPag', component: HomeComponent },
 { path: "drink/:idDrink", component: DetailsComponent },
 { path: "home", redirectTo: "home/A", pathMatch: 'full' },
 { path: "", redirectTo: "home/A", pathMatch: 'full' },
 { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

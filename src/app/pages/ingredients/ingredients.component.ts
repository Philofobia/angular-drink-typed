import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListIngredients } from 'src/app/core/models';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit {
  ingredients: ListIngredients[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ ingredient }) => {
      this.ingredients = ingredient;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinksByIng } from 'src/app/core/models';
@Component({
  selector: 'app-drink-ing-list',
  templateUrl: './drink-ing-list.component.html',
})
export class DrinkIngListComponent implements OnInit {
  sameIngDrinks: DrinksByIng[] = [];
  ingDescr: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ ingDescr }) => {
      this.sameIngDrinks = ingDescr.ingredientDrinks;
      this.ingDescr = ingDescr.ingredientDetails.strDescription;
    });
  }
}

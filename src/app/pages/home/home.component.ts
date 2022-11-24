import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CocktailByName,
  CocktailByNameBool,
  homeInputs,
} from 'src/app/core/models';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  //sono certo che abbia un valore anche se non
  // izianilizzata subito
  drinkLetterList: CocktailByName[] = [];
  drinksList: CocktailByNameBool[] = [];
  cartList: CocktailByNameBool[] = [];
  jsonIn: homeInputs = {
    searchInput: '',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    active: 'A',
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const letter = params.get('letterPag');
      if (letter !== null) this.jsonIn.active = letter;
    });
    this.route.data.subscribe(({ letterPag, search }) => {
      this.drinkLetterList = letterPag;
      console.log(letterPag);
      console.log(search);
      if (search !== undefined && search !== null) {
        this.drinksList = search.map((obj: CocktailByName) => ({
          ...obj,
          selected: false,
        }));
        this.cartCompareList();
      }
    });
  }

  cartCompareList(): void {
    this.cartList.forEach((elCart) => {
      this.drinksList.forEach((elList) => {
        if (elCart.name === elList.name) {
          elList.selected = elCart.selected;
        }
      });
    });
  }

  handleCartParent = (drink: CocktailByNameBool, $event: boolean) => {
    if (this.cartList.length < 5) {
      if ($event) {
        drink.selected = true;
        this.cartList.push(drink);
      } else {
        drink.selected = false;
        this.cartList = this.cartList.filter((el) => el.name !== drink.name);
      }
    } else {
      if ($event) alert('CART LIMIT REACHED');
      else {
        drink.selected = false;
        this.cartList = this.cartList.filter((el) => el.name !== drink.name);
      }
    }
  };
}

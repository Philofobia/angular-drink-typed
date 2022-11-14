import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailByName, CocktailByNameBool, homeInputs } from 'src/app/core/models';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  drinkLetterList: CocktailByName[] = [];
  drinksList: CocktailByNameBool[] = [];
  cartList: CocktailByNameBool[] = [];
  jsonIn: homeInputs = {
    searchInput: '',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    active: ''
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const letter = params.get('letterPag')
      const search = params.get('search');
      if (!!search) {
        this.jsonIn.searchInput = search;
        this.handleSearchDrinksByName();
      }
      this.jsonIn.searchInput = ""
      if (letter !== null) {
        this.jsonIn.active = letter;
      } else {
        this.jsonIn.active = 'A';
      }
      this.handleLetterPagination(); 
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

  handleSearchDrinksByName = () => {
    this.drinksList = []
    this.apiService
      .getDrinksByName(this.jsonIn.searchInput)
      .subscribe((res) => {
        this.drinksList = res.map((obj) => ({ ...obj, selected: false }));
        this.cartCompareList();
      });
  };
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
  handleLetterPagination(): void {
    this.drinkLetterList = []
    console.log("hello")
    this.apiService
      .getCocktailByFirstLetter(this.jsonIn.active)
      .subscribe((response) => {
        this.drinkLetterList = response;
      });
  }
}

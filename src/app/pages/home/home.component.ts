import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CocktailByNameBool, homeInputs } from 'src/app/core/models';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  drinksList: CocktailByNameBool[] = [];
  cartList: CocktailByNameBool[] = [];
  jsonIn: homeInputs = {
    searchInput: '',
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      const search = res.get('search');
      if (!!search) {
        this.jsonIn.searchInput = search;
        this.handleSearchDrinksByName();
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

  handleSearchDrinksByName = () => {
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
}

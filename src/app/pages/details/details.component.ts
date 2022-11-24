import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkById } from 'src/app/core/models';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  drink: DrinkById = {
    idDrink: '',
    name: '',
    category: '',
    glass: '',
    image: '',
    drinkIngr: [],
    drinkInstruction: [],
  };
  switchLanguage: boolean[] = [];
  @BlockUI() blockUI!: NgBlockUI; 
  @ViewChild('drinkDescr') drinkDescrizione!: ElementRef;

  ngOnInit(): void {
    this.route.data.subscribe(({ idDrink }) => {
      this.drink = idDrink;
    });
    setTimeout(() => this.changeLanguage(0), 100);
  }

  customMessage() {
    this.blockUI.start('Updating...'); // "Updating..." will display
  }

  changeLanguage = (input: number) => {
    this.drinkDescrizione.nativeElement.textContent =
      this.drink.drinkInstruction[`${input}`].langDes;
    this.changeSwitch(input);
  };

  changeSwitch = (input: number) => {
    for (let i = 0; i < this.drink.drinkInstruction.length; i++) {
      if (i === input) {
        this.switchLanguage[input] = true;
      } else {
        this.switchLanguage[i] = false;
      }
    }
  };
}

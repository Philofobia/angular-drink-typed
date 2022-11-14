import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DrinkById } from 'src/app/core/models';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}
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
  @ViewChild('drinkDescr') drinkDescrizione!: ElementRef;

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      const id = res.get('idDrink');
      if (!!id) {
        this.apiService.getCocktailById(id).subscribe((res) => {
          this.drink = res;
          setTimeout(() =>this.changeLanguage(0), 100)
        });
      }
    });
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

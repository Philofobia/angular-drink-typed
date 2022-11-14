import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CocktailByName } from 'src/app/core/models';

@Component({
  selector: 'app-drink-li',
  templateUrl: './drink-li.component.html',
  styleUrls: ['./drink-li.component.scss'],
})
export class DrinkLiComponent implements OnInit {
  @Input() selected: boolean = false;
  @Input() showButton: boolean = false;
  @Input() drink: CocktailByName = {
    id: '',
    name: '',
    category: '',
    image: '',
  };
  @Output() handleCount: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleCart = (handler: boolean) => {
      this.handleCount.emit(handler);
  };
}

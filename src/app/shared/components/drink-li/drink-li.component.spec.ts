import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkLiComponent } from './drink-li.component';

describe('DrinkLiComponent', () => {
  let component: DrinkLiComponent;
  let fixture: ComponentFixture<DrinkLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkLiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

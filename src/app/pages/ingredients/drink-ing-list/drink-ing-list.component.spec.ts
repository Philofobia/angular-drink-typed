import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkIngListComponent } from './drink-ing-list.component';

describe('DrinkIngListComponent', () => {
  let component: DrinkIngListComponent;
  let fixture: ComponentFixture<DrinkIngListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkIngListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkIngListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

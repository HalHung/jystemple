import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignDonaFoodPage } from './sign-dona-food.page';

describe('SignDonaFoodPage', () => {
  let component: SignDonaFoodPage;
  let fixture: ComponentFixture<SignDonaFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignDonaFoodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignDonaFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

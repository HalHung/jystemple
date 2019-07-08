import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodFamilyMemberPage } from './food-family-member.page';

describe('FoodFamilyMemberPage', () => {
  let component: FoodFamilyMemberPage;
  let fixture: ComponentFixture<FoodFamilyMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodFamilyMemberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodFamilyMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

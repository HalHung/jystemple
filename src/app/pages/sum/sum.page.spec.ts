import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumPage } from './sum.page';

describe('SumPage', () => {
  let component: SumPage;
  let fixture: ComponentFixture<SumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

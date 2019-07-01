import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralActivityPage } from './general-activity.page';

describe('GeneralActivityPage', () => {
  let component: GeneralActivityPage;
  let fixture: ComponentFixture<GeneralActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralActivityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

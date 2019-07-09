import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignDonaTemplePage } from './sign-dona-temple.page';

describe('SignDonaTemplePage', () => {
  let component: SignDonaTemplePage;
  let fixture: ComponentFixture<SignDonaTemplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignDonaTemplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignDonaTemplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

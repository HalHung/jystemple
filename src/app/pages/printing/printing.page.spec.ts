import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingPage } from './printing.page';

describe('PrintingPage', () => {
  let component: PrintingPage;
  let fixture: ComponentFixture<PrintingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateOptionPage } from './certificate-option.page';

describe('CertificateOptionPage', () => {
  let component: CertificateOptionPage;
  let fixture: ComponentFixture<CertificateOptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateOptionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateOptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

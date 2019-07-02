import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatePreviewPage } from './certificate-preview.page';

describe('CertificatePreviewPage', () => {
  let component: CertificatePreviewPage;
  let fixture: ComponentFixture<CertificatePreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatePreviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatePreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleFamilyMemberPage } from './temple-family-member.page';

describe('TempleFamilyMemberPage', () => {
  let component: TempleFamilyMemberPage;
  let fixture: ComponentFixture<TempleFamilyMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleFamilyMemberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleFamilyMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

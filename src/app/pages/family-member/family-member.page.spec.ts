import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyMemberPage } from './family-member.page';

describe('FamilyMemberPage', () => {
  let component: FamilyMemberPage;
  let fixture: ComponentFixture<FamilyMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyMemberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

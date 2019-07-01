import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberRecordPage } from './member-record.page';

describe('MemberRecordPage', () => {
  let component: MemberRecordPage;
  let fixture: ComponentFixture<MemberRecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberRecordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

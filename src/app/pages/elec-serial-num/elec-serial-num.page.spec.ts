import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecSerialNumPage } from './elec-serial-num.page';

describe('ElecSerialNumPage', () => {
  let component: ElecSerialNumPage;
  let fixture: ComponentFixture<ElecSerialNumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecSerialNumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecSerialNumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

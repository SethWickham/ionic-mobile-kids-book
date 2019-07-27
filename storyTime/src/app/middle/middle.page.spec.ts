import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlePage } from './middle.page';

describe('MiddlePage', () => {
  let component: MiddlePage;
  let fixture: ComponentFixture<MiddlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

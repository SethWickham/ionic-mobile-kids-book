import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginningPage } from './beginning.page';

describe('BeginningPage', () => {
  let component: BeginningPage;
  let fixture: ComponentFixture<BeginningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeginningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

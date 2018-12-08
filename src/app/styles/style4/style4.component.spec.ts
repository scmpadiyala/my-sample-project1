import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Style4Component } from './style4.component';

describe('Style4Component', () => {
  let component: Style4Component;
  let fixture: ComponentFixture<Style4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Style4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Style4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cdchild1Component } from './cdchild1.component';

describe('Cdchild1Component', () => {
  let component: Cdchild1Component;
  let fixture: ComponentFixture<Cdchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cdchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cdchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

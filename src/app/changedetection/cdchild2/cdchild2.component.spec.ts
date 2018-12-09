import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cdchild2Component } from './cdchild2.component';

describe('Cdchild2Component', () => {
  let component: Cdchild2Component;
  let fixture: ComponentFixture<Cdchild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cdchild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cdchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Simplestyle1Component } from './simplestyle1.component';

describe('Simplestyle1Component', () => {
  let component: Simplestyle1Component;
  let fixture: ComponentFixture<Simplestyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Simplestyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Simplestyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

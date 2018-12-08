import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Simplestyle2Component } from './simplestyle2.component';

describe('Simplestyle2Component', () => {
  let component: Simplestyle2Component;
  let fixture: ComponentFixture<Simplestyle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Simplestyle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Simplestyle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

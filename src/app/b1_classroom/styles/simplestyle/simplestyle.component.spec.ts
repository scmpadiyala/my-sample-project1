import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplestyleComponent } from './simplestyle.component';

describe('SimplestyleComponent', () => {
  let component: SimplestyleComponent;
  let fixture: ComponentFixture<SimplestyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplestyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

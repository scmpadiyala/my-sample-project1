import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustdirectivesComponent } from './custdirectives.component';

describe('CustdirectivesComponent', () => {
  let component: CustdirectivesComponent;
  let fixture: ComponentFixture<CustdirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustdirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

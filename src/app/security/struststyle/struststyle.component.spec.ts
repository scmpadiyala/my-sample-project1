import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StruststyleComponent } from './struststyle.component';

describe('StruststyleComponent', () => {
  let component: StruststyleComponent;
  let fixture: ComponentFixture<StruststyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StruststyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StruststyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

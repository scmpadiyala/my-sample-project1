import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormadvanceComponent } from './formadvance.component';

describe('FormadvanceComponent', () => {
  let component: FormadvanceComponent;
  let fixture: ComponentFixture<FormadvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormadvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormadvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

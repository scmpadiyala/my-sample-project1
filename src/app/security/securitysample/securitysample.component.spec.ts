import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritysampleComponent } from './securitysample.component';

describe('SecuritysampleComponent', () => {
  let component: SecuritysampleComponent;
  let fixture: ComponentFixture<SecuritysampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritysampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritysampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

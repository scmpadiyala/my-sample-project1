import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrusturlComponent } from './strusturl.component';

describe('StrusturlComponent', () => {
  let component: StrusturlComponent;
  let fixture: ComponentFixture<StrusturlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrusturlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrusturlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

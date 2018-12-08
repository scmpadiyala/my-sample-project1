import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidURLComponentComponent } from './invalid-urlcomponent.component';

describe('InvalidURLComponentComponent', () => {
  let component: InvalidURLComponentComponent;
  let fixture: ComponentFixture<InvalidURLComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidURLComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidURLComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

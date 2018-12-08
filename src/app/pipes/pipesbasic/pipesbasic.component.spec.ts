import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesbasicComponent } from './pipesbasic.component';

describe('PipesbasicComponent', () => {
  let component: PipesbasicComponent;
  let fixture: ComponentFixture<PipesbasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesbasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

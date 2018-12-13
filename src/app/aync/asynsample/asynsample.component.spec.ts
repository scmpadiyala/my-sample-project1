import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynsampleComponent } from './asynsample.component';

describe('AsynsampleComponent', () => {
  let component: AsynsampleComponent;
  let fixture: ComponentFixture<AsynsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsynsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

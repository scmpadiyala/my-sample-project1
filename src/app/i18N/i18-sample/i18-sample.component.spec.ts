import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18SampleComponent } from './i18-sample.component';

describe('I18SampleComponent', () => {
  let component: I18SampleComponent;
  let fixture: ComponentFixture<I18SampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18SampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplepipeComponent } from './samplepipe.component';

describe('SamplepipeComponent', () => {
  let component: SamplepipeComponent;
  let fixture: ComponentFixture<SamplepipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplepipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

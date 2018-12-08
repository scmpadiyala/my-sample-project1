import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrustresourceurlComponent } from './strustresourceurl.component';

describe('StrustresourceurlComponent', () => {
  let component: StrustresourceurlComponent;
  let fixture: ComponentFixture<StrustresourceurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrustresourceurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrustresourceurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

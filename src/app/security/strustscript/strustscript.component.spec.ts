import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrustscriptComponent } from './strustscript.component';

describe('StrustscriptComponent', () => {
  let component: StrustscriptComponent;
  let fixture: ComponentFixture<StrustscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrustscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrustscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

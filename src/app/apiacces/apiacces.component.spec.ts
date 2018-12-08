import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiaccesComponent } from './apiacces.component';

describe('ApiaccesComponent', () => {
  let component: ApiaccesComponent;
  let fixture: ComponentFixture<ApiaccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiaccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiaccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

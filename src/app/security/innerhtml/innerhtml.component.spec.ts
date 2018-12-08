import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerhtmlComponent } from './innerhtml.component';

describe('InnerhtmlComponent', () => {
  let component: InnerhtmlComponent;
  let fixture: ComponentFixture<InnerhtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerhtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerhtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

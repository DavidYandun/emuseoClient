import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateCountryComponent } from './dialog-create-country.component';

describe('DialogCreateCountryComponent', () => {
  let component: DialogCreateCountryComponent;
  let fixture: ComponentFixture<DialogCreateCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

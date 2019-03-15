import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateMunicipalityComponent } from './dialog-create-municipality.component';

describe('DialogCreateMunicipalityComponent', () => {
  let component: DialogCreateMunicipalityComponent;
  let fixture: ComponentFixture<DialogCreateMunicipalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateMunicipalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateMunicipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

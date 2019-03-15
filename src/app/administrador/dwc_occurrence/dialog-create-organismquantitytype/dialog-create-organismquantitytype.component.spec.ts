import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateOrganismquantitytypeComponent } from './dialog-create-organismquantitytype.component';

describe('DialogCreateOrganismquantitytypeComponent', () => {
  let component: DialogCreateOrganismquantitytypeComponent;
  let fixture: ComponentFixture<DialogCreateOrganismquantitytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateOrganismquantitytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateOrganismquantitytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

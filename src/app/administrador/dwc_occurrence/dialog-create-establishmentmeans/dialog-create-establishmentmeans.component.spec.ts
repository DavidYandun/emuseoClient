import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateEstablishmentmeansComponent } from './dialog-create-establishmentmeans.component';

describe('DialogCreateEstablishmentmeansComponent', () => {
  let component: DialogCreateEstablishmentmeansComponent;
  let fixture: ComponentFixture<DialogCreateEstablishmentmeansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateEstablishmentmeansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateEstablishmentmeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

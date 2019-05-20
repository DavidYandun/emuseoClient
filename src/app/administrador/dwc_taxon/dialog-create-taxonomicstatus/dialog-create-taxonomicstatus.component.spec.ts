import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateTaxonomicstatusComponent } from './dialog-create-taxonomicstatus.component';

describe('DialogCreateTaxonomicstatusComponent', () => {
  let component: DialogCreateTaxonomicstatusComponent;
  let fixture: ComponentFixture<DialogCreateTaxonomicstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateTaxonomicstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateTaxonomicstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

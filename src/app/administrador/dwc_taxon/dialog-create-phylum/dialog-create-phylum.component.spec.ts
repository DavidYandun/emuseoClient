import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreatePhylumComponent } from './dialog-create-phylum.component';

describe('DialogCreatePhylumComponent', () => {
  let component: DialogCreatePhylumComponent;
  let fixture: ComponentFixture<DialogCreatePhylumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreatePhylumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreatePhylumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

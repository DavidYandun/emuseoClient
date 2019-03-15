import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateBasisofrecordComponent } from './dialog-create-basisofrecord.component';

describe('DialogCreateBasisofrecordComponent', () => {
  let component: DialogCreateBasisofrecordComponent;
  let fixture: ComponentFixture<DialogCreateBasisofrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateBasisofrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateBasisofrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

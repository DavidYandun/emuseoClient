import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateReproductiveconditionComponent } from './dialog-create-reproductivecondition.component';

describe('DialogCreateReproductiveconditionComponent', () => {
  let component: DialogCreateReproductiveconditionComponent;
  let fixture: ComponentFixture<DialogCreateReproductiveconditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateReproductiveconditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateReproductiveconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

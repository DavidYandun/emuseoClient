import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateGenusComponent } from './dialog-create-genus.component';

describe('DialogCreateGenusComponent', () => {
  let component: DialogCreateGenusComponent;
  let fixture: ComponentFixture<DialogCreateGenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateGenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateGenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

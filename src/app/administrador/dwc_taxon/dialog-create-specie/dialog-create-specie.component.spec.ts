import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateSpecieComponent } from './dialog-create-specie.component';

describe('DialogCreateSpecieComponent', () => {
  let component: DialogCreateSpecieComponent;
  let fixture: ComponentFixture<DialogCreateSpecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateSpecieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateSpecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateSexComponent } from './dialog-create-sex.component';

describe('DialogCreateSexComponent', () => {
  let component: DialogCreateSexComponent;
  let fixture: ComponentFixture<DialogCreateSexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateSexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateSexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

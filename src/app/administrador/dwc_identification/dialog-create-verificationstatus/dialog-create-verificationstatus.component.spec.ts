import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateVerificationstatusComponent } from './dialog-create-verificationstatus.component';

describe('DialogCreateVerificationstatusComponent', () => {
  let component: DialogCreateVerificationstatusComponent;
  let fixture: ComponentFixture<DialogCreateVerificationstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateVerificationstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateVerificationstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

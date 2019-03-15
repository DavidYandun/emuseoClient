import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreatePeriodComponent } from './dialog-create-period.component';

describe('DialogCreatePeriodComponent', () => {
  let component: DialogCreatePeriodComponent;
  let fixture: ComponentFixture<DialogCreatePeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreatePeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreatePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

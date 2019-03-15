import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateGeoreferenceverificationstatusComponent } from './dialog-create-georeferenceverificationstatus.component';

describe('DialogCreateGeoreferenceverificationstatusComponent', () => {
  let component: DialogCreateGeoreferenceverificationstatusComponent;
  let fixture: ComponentFixture<DialogCreateGeoreferenceverificationstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateGeoreferenceverificationstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateGeoreferenceverificationstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateEpochComponent } from './dialog-create-epoch.component';

describe('DialogCreateEpochComponent', () => {
  let component: DialogCreateEpochComponent;
  let fixture: ComponentFixture<DialogCreateEpochComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateEpochComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateEpochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

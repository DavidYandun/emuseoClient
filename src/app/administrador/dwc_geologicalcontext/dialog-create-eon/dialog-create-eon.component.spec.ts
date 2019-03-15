import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateEonComponent } from './dialog-create-eon.component';

describe('DialogCreateEonComponent', () => {
  let component: DialogCreateEonComponent;
  let fixture: ComponentFixture<DialogCreateEonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateEonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateEonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

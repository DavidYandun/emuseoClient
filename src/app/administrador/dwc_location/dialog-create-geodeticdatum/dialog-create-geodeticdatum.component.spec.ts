import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateGeodeticdatumComponent } from './dialog-create-geodeticdatum.component';

describe('DialogCreateGeodeticdatumComponent', () => {
  let component: DialogCreateGeodeticdatumComponent;
  let fixture: ComponentFixture<DialogCreateGeodeticdatumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateGeodeticdatumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateGeodeticdatumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

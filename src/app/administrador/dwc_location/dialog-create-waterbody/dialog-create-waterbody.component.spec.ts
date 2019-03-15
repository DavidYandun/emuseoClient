import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateWaterbodyComponent } from './dialog-create-waterbody.component';

describe('DialogCreateWaterbodyComponent', () => {
  let component: DialogCreateWaterbodyComponent;
  let fixture: ComponentFixture<DialogCreateWaterbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateWaterbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateWaterbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

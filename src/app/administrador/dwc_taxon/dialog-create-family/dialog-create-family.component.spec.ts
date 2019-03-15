import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateFamilyComponent } from './dialog-create-family.component';

describe('DialogCreateFamilyComponent', () => {
  let component: DialogCreateFamilyComponent;
  let fixture: ComponentFixture<DialogCreateFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateCountyComponent } from './dialog-create-county.component';

describe('DialogCreateCountyComponent', () => {
  let component: DialogCreateCountyComponent;
  let fixture: ComponentFixture<DialogCreateCountyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateCountyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateCountyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

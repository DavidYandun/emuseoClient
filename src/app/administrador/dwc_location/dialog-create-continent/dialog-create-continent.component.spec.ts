import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateContinentComponent } from './dialog-create-continent.component';

describe('DialogCreateContinentComponent', () => {
  let component: DialogCreateContinentComponent;
  let fixture: ComponentFixture<DialogCreateContinentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateContinentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

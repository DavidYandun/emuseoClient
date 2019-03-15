import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateLifestageComponent } from './dialog-create-lifestage.component';

describe('DialogCreateLifestageComponent', () => {
  let component: DialogCreateLifestageComponent;
  let fixture: ComponentFixture<DialogCreateLifestageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateLifestageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateLifestageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

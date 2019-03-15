import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateStateprovinceComponent } from './dialog-create-stateprovince.component';

describe('DialogCreateStateprovinceComponent', () => {
  let component: DialogCreateStateprovinceComponent;
  let fixture: ComponentFixture<DialogCreateStateprovinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateStateprovinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateStateprovinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

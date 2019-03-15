import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateEraComponent } from './dialog-create-era.component';

describe('DialogCreateEraComponent', () => {
  let component: DialogCreateEraComponent;
  let fixture: ComponentFixture<DialogCreateEraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateEraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateEraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

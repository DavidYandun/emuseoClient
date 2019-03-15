import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIdentificationComponent } from './create-identification.component';

describe('CreateIdentificationComponent', () => {
  let component: CreateIdentificationComponent;
  let fixture: ComponentFixture<CreateIdentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIdentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

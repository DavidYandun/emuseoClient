import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOccurrenceComponent } from './create-occurrence.component';

describe('CreateOccurrenceComponent', () => {
  let component: CreateOccurrenceComponent;
  let fixture: ComponentFixture<CreateOccurrenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOccurrenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOccurrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

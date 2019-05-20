import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOccurrenceComponent } from './update-occurrence.component';

describe('UpdateOccurrenceComponent', () => {
  let component: UpdateOccurrenceComponent;
  let fixture: ComponentFixture<UpdateOccurrenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateOccurrenceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOccurrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

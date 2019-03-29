import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaOccurrenceComponent } from './ficha-occurrence.component';

describe('FichaOccurrenceComponent', () => {
  let component: FichaOccurrenceComponent;
  let fixture: ComponentFixture<FichaOccurrenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaOccurrenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaOccurrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

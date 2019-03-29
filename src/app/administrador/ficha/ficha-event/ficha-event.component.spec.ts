import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaEventComponent } from './ficha-event.component';

describe('FichaEventComponent', () => {
  let component: FichaEventComponent;
  let fixture: ComponentFixture<FichaEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

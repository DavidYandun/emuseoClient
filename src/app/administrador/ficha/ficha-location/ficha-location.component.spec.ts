import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaLocationComponent } from './ficha-location.component';

describe('FichaLocationComponent', () => {
  let component: FichaLocationComponent;
  let fixture: ComponentFixture<FichaLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

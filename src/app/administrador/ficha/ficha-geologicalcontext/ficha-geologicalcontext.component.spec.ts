import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaGeologicalcontextComponent } from './ficha-geologicalcontext.component';

describe('FichaGeologicalcontextComponent', () => {
  let component: FichaGeologicalcontextComponent;
  let fixture: ComponentFixture<FichaGeologicalcontextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaGeologicalcontextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaGeologicalcontextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

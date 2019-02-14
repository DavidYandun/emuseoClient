import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeccionesUserComponent } from './colecciones-user.component';

describe('ColeccionesUserComponent', () => {
  let component: ColeccionesUserComponent;
  let fixture: ComponentFixture<ColeccionesUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColeccionesUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeccionesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

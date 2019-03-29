import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaOrganismComponent } from './ficha-organism.component';

describe('FichaOrganismComponent', () => {
  let component: FichaOrganismComponent;
  let fixture: ComponentFixture<FichaOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaOrganismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

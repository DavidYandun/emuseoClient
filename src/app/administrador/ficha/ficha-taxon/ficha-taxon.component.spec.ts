import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaTaxonComponent } from './ficha-taxon.component';

describe('FichaTaxonComponent', () => {
  let component: FichaTaxonComponent;
  let fixture: ComponentFixture<FichaTaxonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaTaxonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaTaxonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

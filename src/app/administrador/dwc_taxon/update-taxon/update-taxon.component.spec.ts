import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaxonComponent } from './update-taxon.component';

describe('CreateTaxonComponent', () => {
  let component: UpdateTaxonComponent;
  let fixture: ComponentFixture<UpdateTaxonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTaxonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaxonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

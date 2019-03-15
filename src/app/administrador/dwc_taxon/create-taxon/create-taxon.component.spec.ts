import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaxonComponent } from './create-taxon.component';

describe('CreateTaxonComponent', () => {
  let component: CreateTaxonComponent;
  let fixture: ComponentFixture<CreateTaxonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTaxonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaxonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

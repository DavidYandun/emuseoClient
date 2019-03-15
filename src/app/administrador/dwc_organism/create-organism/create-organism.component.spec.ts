import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrganismComponent } from './create-organism.component';

describe('CreateOrganismComponent', () => {
  let component: CreateOrganismComponent;
  let fixture: ComponentFixture<CreateOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrganismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

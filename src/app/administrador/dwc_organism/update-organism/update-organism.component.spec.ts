import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrganismComponent } from './update-organism.component';

describe('UpdateOrganismComponent', () => {
  let component: UpdateOrganismComponent;
  let fixture: ComponentFixture<UpdateOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateOrganismComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

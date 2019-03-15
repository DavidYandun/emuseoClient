import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGeologicalcontextComponent } from './create-geologicalcontext.component';

describe('CreateGeologicalcontextComponent', () => {
  let component: CreateGeologicalcontextComponent;
  let fixture: ComponentFixture<CreateGeologicalcontextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGeologicalcontextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGeologicalcontextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

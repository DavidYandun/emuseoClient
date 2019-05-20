import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGeologicalcontextComponent } from './update-geologicalcontext.component';

describe('UpdateGeologicalcontextComponent', () => {
  let component: UpdateGeologicalcontextComponent;
  let fixture: ComponentFixture<UpdateGeologicalcontextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGeologicalcontextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGeologicalcontextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

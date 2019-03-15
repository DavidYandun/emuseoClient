import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadVerificationComponent } from './read-verification.component';

describe('ReadVerificationComponent', () => {
  let component: ReadVerificationComponent;
  let fixture: ComponentFixture<ReadVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

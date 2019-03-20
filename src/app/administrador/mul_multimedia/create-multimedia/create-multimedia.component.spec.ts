import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMultimediaComponent } from './create-multimedia.component';

describe('CreateMultimediaComponent', () => {
  let component: CreateMultimediaComponent;
  let fixture: ComponentFixture<CreateMultimediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMultimediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

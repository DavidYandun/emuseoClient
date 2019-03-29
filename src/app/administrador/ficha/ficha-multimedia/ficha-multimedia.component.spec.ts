import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaMultimediaComponent } from './ficha-multimedia.component';

describe('FichaMultimediaComponent', () => {
  let component: FichaMultimediaComponent;
  let fixture: ComponentFixture<FichaMultimediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaMultimediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

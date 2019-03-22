import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadFichaComponent } from './read-ficha.component';

describe('ReadFichaComponent', () => {
  let component: ReadFichaComponent;
  let fixture: ComponentFixture<ReadFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

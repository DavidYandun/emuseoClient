import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaRecordlevelComponent } from './ficha-recordlevel.component';

describe('FichaRecordlevelComponent', () => {
  let component: FichaRecordlevelComponent;
  let fixture: ComponentFixture<FichaRecordlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaRecordlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaRecordlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

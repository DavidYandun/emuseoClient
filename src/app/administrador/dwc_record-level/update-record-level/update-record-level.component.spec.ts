import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecordLevelComponent } from './update-record-level.component';

describe('UpdateRecordLevelComponent', () => {
  let component: UpdateRecordLevelComponent;
  let fixture: ComponentFixture<UpdateRecordLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRecordLevelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRecordLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

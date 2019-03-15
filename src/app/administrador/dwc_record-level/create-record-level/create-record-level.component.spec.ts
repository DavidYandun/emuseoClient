import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecordLevelComponent } from './create-record-level.component';

describe('CreateRecordLevelComponent', () => {
  let component: CreateRecordLevelComponent;
  let fixture: ComponentFixture<CreateRecordLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecordLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecordLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

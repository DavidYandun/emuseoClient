import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateIslandComponent } from './dialog-create-island.component';

describe('DialogCreateIslandComponent', () => {
  let component: DialogCreateIslandComponent;
  let fixture: ComponentFixture<DialogCreateIslandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateIslandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateIslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

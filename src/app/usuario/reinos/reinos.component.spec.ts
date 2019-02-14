import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinosComponent } from './reinos.component';

describe('ReinosComponent', () => {
  let component: ReinosComponent;
  let fixture: ComponentFixture<ReinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

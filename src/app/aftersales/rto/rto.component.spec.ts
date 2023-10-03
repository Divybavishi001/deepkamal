import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtoComponent } from './rto.component';

describe('RtoComponent', () => {
  let component: RtoComponent;
  let fixture: ComponentFixture<RtoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RtoComponent]
    });
    fixture = TestBed.createComponent(RtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

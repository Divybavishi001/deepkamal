import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtopassingcodeComponent } from './rtopassingcode.component';

describe('RtopassingcodeComponent', () => {
  let component: RtopassingcodeComponent;
  let fixture: ComponentFixture<RtopassingcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RtopassingcodeComponent]
    });
    fixture = TestBed.createComponent(RtopassingcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

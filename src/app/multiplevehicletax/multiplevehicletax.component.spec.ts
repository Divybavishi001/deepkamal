import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplevehicletaxComponent } from './multiplevehicletax.component';

describe('MultiplevehicletaxComponent', () => {
  let component: MultiplevehicletaxComponent;
  let fixture: ComponentFixture<MultiplevehicletaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplevehicletaxComponent]
    });
    fixture = TestBed.createComponent(MultiplevehicletaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleaccessoryComponent } from './vehicleaccessory.component';

describe('VehicleaccessoryComponent', () => {
  let component: VehicleaccessoryComponent;
  let fixture: ComponentFixture<VehicleaccessoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleaccessoryComponent]
    });
    fixture = TestBed.createComponent(VehicleaccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

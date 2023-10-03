import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleaftersalesComponent } from './vehicleaftersales.component';

describe('VehicleaftersalesComponent', () => {
  let component: VehicleaftersalesComponent;
  let fixture: ComponentFixture<VehicleaftersalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleaftersalesComponent]
    });
    fixture = TestBed.createComponent(VehicleaftersalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

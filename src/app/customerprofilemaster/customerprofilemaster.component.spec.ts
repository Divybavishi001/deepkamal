import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerprofilemasterComponent } from './customerprofilemaster.component';

describe('CustomerprofilemasterComponent', () => {
  let component: CustomerprofilemasterComponent;
  let fixture: ComponentFixture<CustomerprofilemasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerprofilemasterComponent]
    });
    fixture = TestBed.createComponent(CustomerprofilemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

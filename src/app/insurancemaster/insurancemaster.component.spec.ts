import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancemasterComponent } from './insurancemaster.component';

describe('InsurancemasterComponent', () => {
  let component: InsurancemasterComponent;
  let fixture: ComponentFixture<InsurancemasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsurancemasterComponent]
    });
    fixture = TestBed.createComponent(InsurancemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

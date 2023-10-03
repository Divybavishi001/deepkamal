import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckmasterComponent } from './truckmaster.component';

describe('TruckmasterComponent', () => {
  let component: TruckmasterComponent;
  let fixture: ComponentFixture<TruckmasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TruckmasterComponent]
    });
    fixture = TestBed.createComponent(TruckmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

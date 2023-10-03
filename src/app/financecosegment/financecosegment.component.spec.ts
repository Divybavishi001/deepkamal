import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancecosegmentComponent } from './financecosegment.component';

describe('FinancecosegmentComponent', () => {
  let component: FinancecosegmentComponent;
  let fixture: ComponentFixture<FinancecosegmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancecosegmentComponent]
    });
    fixture = TestBed.createComponent(FinancecosegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

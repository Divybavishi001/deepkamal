import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankreceiptComponent } from './bankreceipt.component';

describe('BankreceiptComponent', () => {
  let component: BankreceiptComponent;
  let fixture: ComponentFixture<BankreceiptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankreceiptComponent]
    });
    fixture = TestBed.createComponent(BankreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

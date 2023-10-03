import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneouspurchaseComponent } from './miscellaneouspurchase.component';

describe('MiscellaneouspurchaseComponent', () => {
  let component: MiscellaneouspurchaseComponent;
  let fixture: ComponentFixture<MiscellaneouspurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscellaneouspurchaseComponent]
    });
    fixture = TestBed.createComponent(MiscellaneouspurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

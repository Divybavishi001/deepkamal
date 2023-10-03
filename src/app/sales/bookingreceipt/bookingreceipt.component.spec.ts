import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingreceiptComponent } from './bookingreceipt.component';

describe('BookingreceiptComponent', () => {
  let component: BookingreceiptComponent;
  let fixture: ComponentFixture<BookingreceiptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingreceiptComponent]
    });
    fixture = TestBed.createComponent(BookingreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

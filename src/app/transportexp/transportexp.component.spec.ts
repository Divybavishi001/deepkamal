import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportexpComponent } from './transportexp.component';

describe('TransportexpComponent', () => {
  let component: TransportexpComponent;
  let fixture: ComponentFixture<TransportexpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportexpComponent]
    });
    fixture = TestBed.createComponent(TransportexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

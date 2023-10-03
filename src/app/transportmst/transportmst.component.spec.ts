import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportmstComponent } from './transportmst.component';

describe('TransportmstComponent', () => {
  let component: TransportmstComponent;
  let fixture: ComponentFixture<TransportmstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportmstComponent]
    });
    fixture = TestBed.createComponent(TransportmstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

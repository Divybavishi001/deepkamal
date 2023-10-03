import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdsmasterComponent } from './tdsmaster.component';

describe('TdsmasterComponent', () => {
  let component: TdsmasterComponent;
  let fixture: ComponentFixture<TdsmasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdsmasterComponent]
    });
    fixture = TestBed.createComponent(TdsmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

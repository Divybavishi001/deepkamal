import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentenquirycancelComponent } from './agentenquirycancel.component';

describe('AgentenquirycancelComponent', () => {
  let component: AgentenquirycancelComponent;
  let fixture: ComponentFixture<AgentenquirycancelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentenquirycancelComponent]
    });
    fixture = TestBed.createComponent(AgentenquirycancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

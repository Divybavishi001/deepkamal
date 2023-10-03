import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryAgentComponent } from './enquiry-agent.component';

describe('EnquiryAgentComponent', () => {
  let component: EnquiryAgentComponent;
  let fixture: ComponentFixture<EnquiryAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquiryAgentComponent]
    });
    fixture = TestBed.createComponent(EnquiryAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

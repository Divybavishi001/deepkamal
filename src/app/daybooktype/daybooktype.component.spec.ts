import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaybooktypeComponent } from './daybooktype.component';

describe('DaybooktypeComponent', () => {
  let component: DaybooktypeComponent;
  let fixture: ComponentFixture<DaybooktypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaybooktypeComponent]
    });
    fixture = TestBed.createComponent(DaybooktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

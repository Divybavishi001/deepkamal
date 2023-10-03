import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchememasterComponent } from './schememaster.component';

describe('SchememasterComponent', () => {
  let component: SchememasterComponent;
  let fixture: ComponentFixture<SchememasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchememasterComponent]
    });
    fixture = TestBed.createComponent(SchememasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindchasisComponent } from './findchasis.component';

describe('FindchasisComponent', () => {
  let component: FindchasisComponent;
  let fixture: ComponentFixture<FindchasisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindchasisComponent]
    });
    fixture = TestBed.createComponent(FindchasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

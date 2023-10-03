import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingDemoComponent } from './sorting-demo.component';

describe('SortingDemoComponent', () => {
  let component: SortingDemoComponent;
  let fixture: ComponentFixture<SortingDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortingDemoComponent]
    });
    fixture = TestBed.createComponent(SortingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

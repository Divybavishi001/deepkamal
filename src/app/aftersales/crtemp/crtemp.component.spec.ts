import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtempComponent } from './crtemp.component';

describe('CrtempComponent', () => {
  let component: CrtempComponent;
  let fixture: ComponentFixture<CrtempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrtempComponent]
    });
    fixture = TestBed.createComponent(CrtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

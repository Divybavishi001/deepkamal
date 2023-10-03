import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneoussalesComponent } from './miscellaneoussales.component';

describe('MiscellaneoussalesComponent', () => {
  let component: MiscellaneoussalesComponent;
  let fixture: ComponentFixture<MiscellaneoussalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscellaneoussalesComponent]
    });
    fixture = TestBed.createComponent(MiscellaneoussalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

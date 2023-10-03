import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipledoComponent } from './multipledo.component';

describe('MultipledoComponent', () => {
  let component: MultipledoComponent;
  let fixture: ComponentFixture<MultipledoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipledoComponent]
    });
    fixture = TestBed.createComponent(MultipledoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

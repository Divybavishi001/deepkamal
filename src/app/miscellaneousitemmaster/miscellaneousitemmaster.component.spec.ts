import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousitemmasterComponent } from './miscellaneousitemmaster.component';

describe('MiscellaneousitemmasterComponent', () => {
  let component: MiscellaneousitemmasterComponent;
  let fixture: ComponentFixture<MiscellaneousitemmasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscellaneousitemmasterComponent]
    });
    fixture = TestBed.createComponent(MiscellaneousitemmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActionComponent } from './page-action.component';

describe('PageActionComponent', () => {
  let component: PageActionComponent;
  let fixture: ComponentFixture<PageActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageActionComponent]
    });
    fixture = TestBed.createComponent(PageActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

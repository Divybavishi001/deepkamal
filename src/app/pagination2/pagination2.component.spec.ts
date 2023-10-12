import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent2 } from './pagination2.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent2;
  let fixture: ComponentFixture<PaginationComponent2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent2 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

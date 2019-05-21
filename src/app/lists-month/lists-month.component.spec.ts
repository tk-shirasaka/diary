import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsMonthComponent } from './lists-month.component';

describe('ListsMonthComponent', () => {
  let component: ListsMonthComponent;
  let fixture: ComponentFixture<ListsMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

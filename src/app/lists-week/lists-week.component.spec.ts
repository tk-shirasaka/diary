import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsWeekComponent } from './lists-week.component';

describe('ListsWeekComponent', () => {
  let component: ListsWeekComponent;
  let fixture: ComponentFixture<ListsWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

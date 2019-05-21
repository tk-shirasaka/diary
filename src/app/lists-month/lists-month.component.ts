import { Component, OnInit } from '@angular/core';

import { Member, Diaries } from '../api';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lists-month',
  templateUrl: './lists-month.component.html',
  styleUrls: ['./lists-month.component.scss']
})
export class ListsMonthComponent implements OnInit {

  members: Member[] = [];
  diaries: Diaries = new Diaries;

  today: Date = new Date;
  current: Date;
  next: Date;
  prev: Date;
  offset: number;
  limit: number;
  weeks: number[];
  color: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.initialize(this.today.getFullYear(), this.today.getMonth());
  }

  initialize(year: number, month: number) {
    this.current = new Date(year, month, 1);
    this.next = new Date(year, month + 1, 1);
    this.prev = new Date(year, month - 1, 1);
    this.offset = this.current.getDay();
    this.limit = (new Date(year, month + 1, 0)).getDate();
    this.weeks = Array(Math.ceil((this.offset + this.limit) / 7));

    this.api.members().subscribe(members =>  this.members = members);
    this.api.diaries(this.current.getTime(), this.next.getTime()).subscribe(diaries =>  this.diaries = diaries);
  }

  getDay(i: number, j: number) {
    const day = i * 7 + j - this.offset;

    if (day === this.today.getDate() && this.current.getMonth() === this.today.getMonth()) {
      this.color = 'success';
    } else if (j === 1) {
      this.color = 'danger';
    } else if (j === 7) {
      this.color = 'info';
    } else {
      this.color = '';
    }
    return day;
  }
}

import { Component, OnInit } from '@angular/core';

import { Member, Diaries } from '../api';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lists-week',
  templateUrl: './lists-week.component.html',
  styleUrls: ['./lists-week.component.scss']
})
export class ListsWeekComponent implements OnInit {

  members: Member[] = [];
  diaries: Diaries = new Diaries;

  today: Date = new Date;
  time: number;
  next: number;
  prev: number;
  day: number;
  color: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    const offset = this.today.getDay();

    this.initialize(this.today.getTime() - this.timesOfDay(offset));
  }

  initialize(time: number) {
    this.time = time;
    this.next = time + this.timesOfDay(7);
    this.prev = time - this.timesOfDay(7);

    this.api.members().subscribe(members =>  this.members = members);
    this.api.diaries(time, this.next).subscribe(diaries =>  this.diaries = diaries);
  }

  timesOfDay(day: number) {
    return 1000 * 60 * 60 * 24 * day;
  }

  nextDay(i: number) {
    const current = new Date(this.time + this.timesOfDay(i));

    this.day = current.getDate();
    if (this.day === this.today.getDate() && current.getFullYear() === this.today.getFullYear() && current.getMonth() === this.today.getMonth()) {
      this.color = 'success';
    } else if (i === 0) {
      this.color = 'danger';
    } else if (i === 6) {
      this.color = 'info';
    } else {
      this.color = '';
    }
    return current;
  }
}

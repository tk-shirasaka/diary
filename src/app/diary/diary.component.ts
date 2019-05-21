import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Member, Diary } from '../api';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  members: Member[] = [];
  diaries: Diary[] = [];
  curr: Date;
  next: Date;
  prev: Date;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const date = params.get('date');
      const [year, month, day] = date.split('-').map(item => +item);

      this.api.members().subscribe(members => this.members = members);
      this.api.diary(date).subscribe(diaries => this.diaries = diaries);
      this.curr = new Date(year, month - 1, day);
      this.next = new Date((this.curr.getTime()) + (60 * 60 * 24 * 1000));
      this.prev = new Date((this.curr.getTime()) - (60 * 60 * 24 * 1000));
    });
  }

  find(member: number): Diary {
    return this.diaries.filter(diary => diary.member_id === member).pop();
  }
}

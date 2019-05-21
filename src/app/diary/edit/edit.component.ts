import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';

import { Member, Diary } from '../../api';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  date: string;
  member: Member = new Member;
  diary: Diary = new Diary;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit() {
    const [year, month, day] = this.route.snapshot.paramMap.get('date').split('-').map(item => +item);
    const id = +this.route.snapshot.paramMap.get('member_id');

    this.diary = Object.assign(this.diary, this.route.snapshot.params);
    this.date = `${year}年${month}月${day}日`
    this.api.members().pipe(
      map(members => members.filter(member => member.id === id).pop())
    ).subscribe(member => this.member = member);
  }

  save() {
    const date = this.route.snapshot.paramMap.get('date');

    this.api.save(this.diary).subscribe(_ => this.router.navigate([date]));
  }
}

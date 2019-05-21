import { Component, OnInit, Input } from '@angular/core';

import { Member, Diary } from '../../api';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() member: Member;
  @Input() diary: Diary;

  constructor() { }

  ngOnInit() {
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {

  @Input() rank: number;

  loop: number[];

  constructor() { }

  ngOnInit() {
    this.loop = Array(this.rank);
  }
}

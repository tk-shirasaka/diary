import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'parts-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class PartsNavigationComponent implements OnInit {

  @Input() left: boolean;
  @Input() right: boolean;

  constructor() { }

  ngOnInit() {
  }
}

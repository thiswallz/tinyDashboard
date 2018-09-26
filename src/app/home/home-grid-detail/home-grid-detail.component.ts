import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-grid-detail',
  templateUrl: './home-grid-detail.component.html',
  styleUrls: ['./home-grid-detail.component.scss']
})
export class HomeGridDetailComponent implements OnInit {
  @Input() data: any = [];
  @Input() columns: any = [];

  constructor() {}

  ngOnInit() {}
}

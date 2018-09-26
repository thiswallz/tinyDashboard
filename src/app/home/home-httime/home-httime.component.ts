import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-httime',
  templateUrl: './home-httime.component.html',
  styleUrls: ['./home-httime.component.scss']
})
export class HomeHttimeComponent implements OnInit {
  @Input() data = [];

  constructor() {}

  ngOnInit() {}
}

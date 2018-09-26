import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HomeSidebarComponent } from 'src/app/home/home-sidebar/home-sidebar.component';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
  @ViewChild('side') public side: HomeSidebarComponent;

  chartView = false;
  orders = [[]];
  dataHt = [];

  constructor() {}

  ngOnInit() {}

  load() {}
}

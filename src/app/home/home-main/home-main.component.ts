import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HomeSidebarComponent } from 'src/app/home/home-sidebar/home-sidebar.component';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
  @ViewChild('side') public side: HomeSidebarComponent;

  chartView = false;
  orders = ORDERS;

  constructor() {}

  ngOnInit() {}

  load() {}
}

function generateDate(delay: number) {
  return dayjs(new Date())
    .add(delay, 'day')
    .format('DD/MM/YYYY');
}

const ORDERS = [
  ['10:15', 'Other', '33203111AXy', '36.55', generateDate(2)],
  ['10:18', 'Bikes', '22418188', '90', generateDate(5)],
  ['10:19', 'Technology', '111001029', '400.99', generateDate(9)],
  ['11:02', 'Technology', '111001029', '199.89', generateDate(6)],
  ['12:00', 'Other', '4412343', '4.41', generateDate(4)],
  ['13:50', 'Sales', '111001029', '0.99', generateDate(4)],
  ['16:30', 'Technology', '889101098', '60.30', generateDate(1)]
];

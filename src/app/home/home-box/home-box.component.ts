import { Component, OnInit, Input } from '@angular/core';
import { animationPlay } from 'src/app/animations';

@Component({
  selector: 'app-home-box',
  templateUrl: './home-box.component.html',
  styleUrls: ['./home-box.component.scss'],
  animations: [...animationPlay]
})
export class HomeBoxComponent implements OnInit {
  @Input() title = '';
  @Input() icon = '';

  _updated = false;
  get updated(): boolean {
    return this._updated;
  }
  @Input()
  set updated(value: boolean) {
    console.log('trugg', value);
    this._updated = value;
  }

  constructor() {}

  onAnimationEventDone(e) {
    this._updated = false;
  }

  ngOnInit() {}
}

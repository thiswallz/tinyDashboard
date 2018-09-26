import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClockService } from 'src/app/core/services/clock.service';

@Component({
  selector: 'app-dashboard-clock',
  templateUrl: './dashboard-clock.component.html',
  styleUrls: ['./dashboard-clock.component.css']
})
export class DashboardClockComponent implements OnInit, OnDestroy {
  private clockSubscription: Subscription;
  public currentTime: string;

  constructor(private clockService: ClockService) {}

  ngOnInit(): void {
    this.clockSubscription = this.clockService.getClock().subscribe(time => {
      this.setTime(time);
    });
  }

  ngOnDestroy(): void {
    this.clockSubscription.unsubscribe();
  }

  setTime(timeToSet: Date): void {
    this.currentTime =
      this.addZero(timeToSet.getHours()) +
      ':' +
      this.addZero(timeToSet.getMinutes()) +
      ':' +
      this.addZero(timeToSet.getSeconds());
  }

  private addZero(i: number) {
    let returnValue: string;
    if (i < 10) {
      returnValue = '0' + i.toString();
    } else {
      returnValue = i.toString();
    }
    return returnValue;
  }
}

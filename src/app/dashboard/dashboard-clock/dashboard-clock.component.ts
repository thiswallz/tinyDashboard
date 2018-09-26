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
  public time: Date;

  constructor(private clockService: ClockService) {}

  ngOnInit(): void {
    this.clockSubscription = this.clockService.getClock().subscribe(time => {
      this.time = time;
    });
  }

  ngOnDestroy(): void {
    this.clockSubscription.unsubscribe();
  }
}

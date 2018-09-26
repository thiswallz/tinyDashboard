import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  public clock: Observable<Date>;

  constructor() {
    this.clock = interval(1000).pipe(
      map(tick => {
        return new Date();
      }),
      share()
    );
  }

  public getClock(): Observable<Date> {
    return this.clock;
  }
}

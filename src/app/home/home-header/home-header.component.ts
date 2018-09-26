import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoadGuardService } from 'src/app/core/services/load-guard.service';
import { DashboardVm, Loc } from 'src/app/core/models/dashboard.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  location;
  @Output() locationChange = new EventEmitter<number>();

  locations: Loc[] = [];

  constructor(private service: LoadGuardService) {
    setInterval(() => {
      this.locationChange.emit(this.location.id);
    }, environment.intervalTime);
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getLocations().subscribe(data => {
      this.locations = data;
      this.location = this.locations[0];
      this.locationChange.emit(this.location.id);
    });
  }

  onChangeLocation() {
    this.locationChange.emit(this.location.id);
  }
}

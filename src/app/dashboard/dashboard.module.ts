import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardClockComponent } from './dashboard-clock/dashboard-clock.component';
import { DashboardGaugeComponent } from './dashboard-gauge/dashboard-gauge.component';
import { DashboardLineComponent } from './dashboard-line/dashboard-line.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  declarations: [DashboardClockComponent, DashboardGaugeComponent, DashboardLineComponent],
  exports: [DashboardClockComponent, DashboardGaugeComponent, DashboardLineComponent]
})
export class DashboardModule {}

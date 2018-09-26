import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardClockComponent } from './dashboard-clock/dashboard-clock.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  declarations: [DashboardClockComponent],
  exports: [DashboardClockComponent]
})
export class DashboardModule {}

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeBoxComponent } from './home-box/home-box.component';
import { HomeGridDetailComponent } from './home-grid-detail/home-grid-detail.component';
import { DashboardModule } from 'src/app/dashboard/dashboard.module';
import { HomeSidebarComponent } from './home-sidebar/home-sidebar.component';
import { HomeHttimeComponent } from './home-httime/home-httime.component';
import { HomeForecastChartComponent } from './home-forecast-chart/home-forecast-chart.component';

@NgModule({
  imports: [CommonModule, FormsModule, DashboardModule],
  declarations: [
    HomeMainComponent,
    HomeHeaderComponent,
    HomeBoxComponent,
    HomeGridDetailComponent,
    HomeSidebarComponent,
    HomeHttimeComponent,
    HomeForecastChartComponent
  ],
  exports: [HomeMainComponent]
})
export class HomeModule {}

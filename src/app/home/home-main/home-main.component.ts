import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { LoadGuardService } from 'src/app/core/services/load-guard.service';
import { BaseService } from 'src/app/core/services/base.service';
import { ForecastVm, Forecast } from 'src/app/core/models/forecast.model';
import { HtTimeVm, HtTime } from 'src/app/core/models/httime.model';
import { DashboardGaugeComponent } from 'src/app/dashboard/dashboard-gauge/dashboard-gauge.component';
import { DashboardLineComponent } from 'src/app/dashboard/dashboard-line/dashboard-line.component';
import { HomeSidebarComponent } from 'src/app/home/home-sidebar/home-sidebar.component';
import { HomeForecastChartComponent } from 'src/app/home/home-forecast-chart/home-forecast-chart.component';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
  @ViewChild('gauge') public gauge: DashboardGaugeComponent;
  @ViewChild('side') public side: HomeSidebarComponent;
  @ViewChild('line') public line: DashboardLineComponent;
  @ViewChild('forecast') public forecast: HomeForecastChartComponent;

  location: number;

  forecastChartView = false;
  loadingGauge = false;
  loadingLine = false;
  dataForecast = [];
  dataHt = [];
  fvm: ForecastVm;
  hvm: HtTimeVm;

  constructor(private base: BaseService, private service: LoadGuardService) {}

  ngOnInit() {
    this.service.getSessionData().subscribe(data => {
      console.log('data::: ', data);
    });
    this.load();
  }

  onLocationChange(location: number) {
    this.location = location;
    this.load();
  }

  load() {
    if (!this.location) {
      return;
    }
    this.side.load(this.location);

    if (!this.loadingGauge) {
      this.loadingGauge = true;
      this.service.getGaugeData(this.location).subscribe(
        data => {
          this.gauge.isError = false;
          this.gauge.update(data);
          this.loadingGauge = false;
        },
        error => {
          console.log(null, error);
          this.gauge.isError = true;
          this.loadingGauge = false;
          this.gauge.ErrorMessage = 'Es ist ein Fehler beim Ermitteln der Daten aufgetreten.';
        }
      );
    }

    if (!this.loadingLine) {
      this.loadingLine = true;
      this.service.getLineChartData(this.location).subscribe(
        data => {
          this.line.isError = false;
          this.line.update(data, true);
          this.loadingLine = false;
        },
        error => {
          this.loadingLine = false;
          this.line.isError = true;
          this.line.ErrorMessage = 'Es ist ein Fehler beim Ermitteln der Daten aufgetreten.';
        }
      );
    }

    this.service.getForecastData(this.location).subscribe(
      data => {
        this.dataForecast = [];
        this.fvm = this.forecastConvert(data);
        this.fvm.forecasts.forEach(item => {
          this.dataForecast = [
            ...this.dataForecast,
            [item.displayTime, item.tariff, item.value, item.probMaxLoad, item.probThreshhold]
          ];
        });
        this.forecast.load(this.dataForecast);
      },
      error => {
        console.error('Error calling forecast', error);
      }
    );

    this.service.getHTData(this.location).subscribe(
      data => {
        this.dataHt = [];
        this.hvm = this.htConvert(data);
        let lastName = '';
        this.hvm.times.forEach(item => {
          const name = item.seasonName ? item.seasonName : lastName;
          this.dataHt = {
            ...this.dataHt,
            [name]: [...(this.dataHt[name] ? this.dataHt[name] : []), item.period]
          };
          lastName = item.seasonName;
        });
      },
      error => {
        console.error('Error calling ht', error);
      }
    );
  }

  private forecastConvert(model: any): ForecastVm {
    const vm = new ForecastVm();

    vm.forecasts = new Array<Forecast>();
    for (const key of Object.keys(model.isHtInQh)) {
      const fc = new Forecast();
      const time = +key;
      const qh = time - (time % 900000); // TODO: workaround
      fc.time = time;
      fc.displayTime = this.base.getDisplayedTime(new Date(qh));
      fc.tariff = model.isHtInQh[key] ? 'HT' : 'NT';
      fc.value = model.forecast.value[qh];
      fc.probMaxLoad = model.forecast.probMaxLoad[qh] * 100;
      fc.probThreshhold = Math.max(0, model.forecast.probThreshhold[qh] * 100);
      vm.forecasts.push(fc);
    }
    return vm;
  }

  private htConvert(model: any): HtTimeVm {
    const vm = new HtTimeVm();

    vm.year = model.htCalendars[0].year;
    vm.times = new Array<HtTime>();

    let lastSn = null;
    for (const htCalendar of model.htCalendars) {
      for (const value of htCalendar.values) {
        const time = new HtTime();
        time.seasonName = lastSn !== htCalendar.seasonName ? htCalendar.seasonName : '';
        time.period = `${value.from.slice(11, 16)} - ${value.to.slice(11, 16)} `;
        lastSn = htCalendar.seasonName;
        vm.times.push(time);
      }
    }

    return vm;
  }
}

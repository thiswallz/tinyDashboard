import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LoadGuardService } from 'src/app/core/services/load-guard.service';
import { BaseService } from 'src/app/core/services/base.service';
import { Loc, DashboardVm } from 'src/app/core/models/dashboard.model';

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent implements OnInit {
  public vm: DashboardVm;
  public updated = false;
  loadingBar = false;

  constructor(private base: BaseService, private service: LoadGuardService) {}

  ngOnInit() {}

  load(location: number) {
    if (!location) {
      return;
    }
    this.updated = false;
    this.loadingBar = true;
    this.service.getBaseData(location).subscribe(
      data => {
        this.vm = this.convert(data);
        this.updated = true;
        this.loadingBar = false;
      },
      error => {
        console.error('Error calling getBaseData: ', error);
        this.loadingBar = false;
      }
    );
  }

  private convert(model: any): DashboardVm {
    const vm = new DashboardVm();

    const date = new Date(model.currentTime);
    vm.currentTime = this.base.getDisplayedTime(date);
    vm.profile = model.isAtypic === null ? '-' : model.isAtypic ? 'atypic' : 'typic';
    vm.tariff = model.isHt === null ? '-' : model.isHt ? 'HT' : 'NT';

    if (model.leftTimeToSwitch > 0) {
      const hours = Math.floor(model.leftTimeToSwitch / 1000 / 60 / 60);
      const minutes = Math.floor(model.leftTimeToSwitch / 1000 / 60) - hours * 60;
      vm.leftTimeToSwitch = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);
    } else {
      vm.leftTimeToSwitch = '-';
    }

    vm.maxHigh = model.maxLoad.maxHigh + 'MW';
    vm.maxLow = model.maxLoad.maxLow + 'MW';
    vm.threshold = model.threshold + 'MW';

    vm.gridOperator = model.gridInfo.gridOperator;
    vm.voltageLevel = model.gridInfo.voltageLevel;
    vm.capacityCharges = model.gridInfo.capacityCharges;

    return vm;
  }
}

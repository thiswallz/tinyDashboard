import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from './services/base.service';
import { ClockService } from './services/clock.service';
import { LoadGuardService } from './services/load-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { CoreLoadingComponent } from './core-loading/core-loading.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [CoreLoadingComponent],
  exports: [CoreLoadingComponent]
})
export class CoreModule {}

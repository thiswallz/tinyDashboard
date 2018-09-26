import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './router/app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthGuard } from './router/auth-route-guard';

@NgModule({
  declarations: [AppComponent],
  providers: [AuthGuard],
  imports: [
    BrowserModule,
    DashboardModule,
    BrowserAnimationsModule,
    CoreModule,
    HomeModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

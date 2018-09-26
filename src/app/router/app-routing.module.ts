import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from 'src/app/home/home-main/home-main.component';
import { AuthGuard } from './auth-route-guard';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: HomeMainComponent
  },
  { path: '**', redirectTo: 'dashboard' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      onSameUrlNavigation: 'reload',
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

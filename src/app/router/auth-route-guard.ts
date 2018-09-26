import { NgModule, Injectable, Inject } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoadGuardService } from 'src/app/core/services/load-guard.service';
import { DOCUMENT } from '@angular/common';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(DOCUMENT) private document: any, private service: LoadGuardService) {}

  canActivate() {
    return this.service.getSessionData().pipe(
      map(data => {
        console.log('guard data::: ', data);
        if (data) {
          return true;
        } else {
          this.document.location.href =
            'http://localhost:57294/account/SingleSignOn?redirect=http://localhost:4200/#/dashboard';
          return false;
        }
      })
    );
  }
}

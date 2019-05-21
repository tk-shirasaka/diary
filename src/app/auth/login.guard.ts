import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  redirect: string;

  constructor(private login: LoginService) { }

  canActivate(_: any, state: RouterStateSnapshot): Observable<boolean> {
    return this.login.check(state.url);
  }
}

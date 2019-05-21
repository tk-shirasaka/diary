import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  redirect: string = '';

  constructor(
    private router: Router,
    private api: ApiService
  ) { }

  check(url: string): Observable<boolean> {
    this.redirect = url;
    return this.api.login('').pipe(tap(result => result || this.router.navigate(['/login'])));
  }

  login(password: string) {
    return this.api.login(password).pipe(tap(result => result && this.router.navigate([this.redirect])));
  }
}

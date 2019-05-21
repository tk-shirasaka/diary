import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { Member, Diaries, Diary } from './api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private cache: {
    login: boolean;
    members: Observable<Member[]>;
  } = { login: false, members: null };

  constructor(private http: HttpClient) { }

  login(password: string): Observable<boolean> {
    return this.cache.login
    ? of(this.cache.login)
    : this.http.post<boolean>('/api/login', { password }).pipe(map(login => this.cache.login = Boolean(login)));
  }

  members(): Observable<Member[]> {
    return this.cache.members
    ? this.cache.members
    : this.http.get<Member[]>('/api/members').pipe(tap(members => this.cache.members = of(members)));
  }

  diaries(start: number, end: number): Observable<Diaries> {
    return this.http.get<Diaries>(`/api/diaries/${start}/${end}`);
  }

  diary(date: string): Observable<Diary[]> {
    return this.http.get<Diary[]>(`/api/diary/${date}`);
  }

  save(diary: Diary): Observable<number> {
    return this.http.post<number>(`/api/diary`, diary);
  }
}

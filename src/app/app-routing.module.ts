import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './auth/login.guard';

import { LoginComponent } from './login/login.component';
import { ListsComponent } from './lists/lists.component';
import { DiaryComponent } from './diary/diary.component';
import { EditComponent } from './diary/edit/edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ListsComponent, canActivate: [LoginGuard] },
  { path: ':date', component: DiaryComponent, canActivate: [LoginGuard] },
  { path: ':date/:member_id/edit', component: EditComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

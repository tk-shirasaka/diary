import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { ListsMonthComponent } from './lists-month/lists-month.component';
import { ListsWeekComponent } from './lists-week/lists-week.component';
import { DiaryComponent } from './diary/diary.component';
import { DetailComponent } from './diary/detail/detail.component';
import { EditComponent } from './diary/edit/edit.component';
import { RankComponent } from './diary/rank/rank.component';
import { LoginComponent } from './login/login.component';
import { PartsNavigationComponent } from './parts/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    ListsMonthComponent,
    ListsWeekComponent,
    DiaryComponent,
    DetailComponent,
    EditComponent,
    RankComponent,
    LoginComponent,
    PartsNavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

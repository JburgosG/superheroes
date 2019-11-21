import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { app_routes } from './app.routes';

import {NgxPaginationModule} from 'ngx-pagination';

import { TruncatePipe } from './pipes/truncate.pipe';

import { AuthService } from './services/auth.services';
import { HeroesService } from './services/heroes.services';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { RankingComponent } from './components/ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    HomeComponent,
    HeroComponent,
    RankingComponent
  ],
  imports: [
    NgxPaginationModule,
    HttpClientModule,
    BrowserModule,
    app_routes
  ],
  providers: [
    AuthService,
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

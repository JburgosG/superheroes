import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { RankingComponent } from './components/ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    app_routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { RankingComponent } from './components/ranking/ranking.component';

const ROUTES: Routes = [    
    { path: 'home', component: HomeComponent },
    { path: 'heroe/:id', component: HeroComponent },
    { path: 'ranking', component: RankingComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routes = RouterModule.forRoot(ROUTES);
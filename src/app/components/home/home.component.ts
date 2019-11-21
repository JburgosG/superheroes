import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.services';
import { HeroesService, Heroe } from '../../services/heroes.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  load: boolean;
  heroes:Heroe[] = [];

  constructor(
    private _heroesService: HeroesService,
    private _authService: AuthService) {
      this.load = true;
  }

  ngOnInit() {
    this._authService.loadStorage().then(() => {
      this._heroesService.getHeroes(this._authService.token).then(() => {
        this.heroes = this._heroesService.heroes;
        this.load = false;
      });
    });
  }

}

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.services';
import { HeroesService, Heroe } from '../../services/heroes.services';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  
  load: boolean;
  hero_id: any = 0;
  hero:Heroe[] = [];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _authService: AuthService) {
    
    this.load = true;

    this.activatedRoute.params.subscribe(params => {
      this.hero_id = params['id'];
    });
  }

  ngOnInit() {
    this._authService.loadStorage().then(() => {
      this._heroesService.getHero(this._authService.token, this.hero_id).then(() => {
        this.hero = this._heroesService.hero;
        this.load = false;
      });
    });
  }

}
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.services';
import { RankingService } from '../../services/ranking.services';
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
    private _rankingService: RankingService,
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

  like(hero_id){
    this._authService.loadStorage().then(() => {
      this._rankingService.loadStorage('likes').then(() => {
        let likes = [];
        
        if(this._rankingService.likes){
          likes = JSON.parse(this._rankingService.likes);
        }

        if(likes.indexOf(hero_id) !== -1){
          alert('Anteriormente ya le dio Me Gusta...');
        }else{
          this._rankingService.setOption(this._authService.token, 'likes', hero_id , 'add').then(() => {
            alert('Me Gusta!');
          });
        }
      });
    });
  }

  dontLike(hero_id){
    this._authService.loadStorage().then(() => {
      this._rankingService.loadStorage('dont_likes').then(() => {
        let dont_likes = [];
        
        if(this._rankingService.dont_likes){
          dont_likes = JSON.parse(this._rankingService.dont_likes);
        }

        if(dont_likes.indexOf(hero_id) !== -1){
          alert('Anteriormente ya le dio No me Gusta...');
        }else{
          this._rankingService.setOption(this._authService.token, 'dont_likes', hero_id , 'add').then(() => {
            alert('No me Gusta!');
          });
        }
      });
    });
  }
}
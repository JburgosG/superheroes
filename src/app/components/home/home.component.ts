import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.services';
import { RankingService } from '../../services/ranking.services';
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
    private _rankingService: RankingService,
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

  like(hero_id){
    this._authService.loadStorage().then(() => {
      this._rankingService.loadStorage().then(() => {
        let likes = [];
        
        if(this._rankingService.likes){
          likes = JSON.parse(this._rankingService.likes);
        }

        console.log(hero_id);

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
    alert('aaa');
  }

}

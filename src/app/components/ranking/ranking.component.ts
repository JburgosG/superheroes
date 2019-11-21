import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.services';
import { RankingService } from '../../services/ranking.services';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  load: boolean;
  ranking: any[] = [];

  constructor(
    private _rankingService: RankingService,
    private _authService: AuthService) {
      this.load = true;
  }

  ngOnInit() {
    this._authService.loadStorage().then(() => {
      this._rankingService.getRanking(this._authService.token).then(() => {
        this.ranking = this._rankingService.ranking;
        console.log(this.ranking);
        this.load = false;
      });
    });
  }
}
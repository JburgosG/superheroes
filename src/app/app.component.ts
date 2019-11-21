import { Component } from '@angular/core';
import { AuthService } from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  constructor(private _authService: AuthService){
    this.getApiToken();
  }

  getApiToken(){
    this._authService.getToken().then();
  }
}

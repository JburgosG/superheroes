import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { CLIENT_ID, CLIENT_SECRET, URI } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    
  token = null;

  constructor(public http: HttpClient) {}

  getToken(){
    let params = new HttpParams();
    params = params.append('client_id', CLIENT_ID);
    params = params.append('client_secret', CLIENT_SECRET);
    params = params.append('grant_type', 'client_credentials');

    return new Promise((resolve, reject) => {
        let url = URI + "oauth/token";
        this.http.post(url, params).subscribe((data) => {
            this.token = data['access_token'];
            this.saveStorage();
            resolve();
        });
    });
  }

  saveStorage(){
    localStorage.setItem('token', this.token);    
  }

  loadStorage(){
    return new Promise((resolve, reject) => {
        if(localStorage.getItem('token')){
            this.token = localStorage.getItem('token');
        }
        resolve();
    });
  }
}
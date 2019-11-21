import { Injectable } from '@angular/core';

import { URI } from '../config/api.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
    
  hero: any = {};
  heroes: any = {};

  constructor(public http: HttpClient) {}

  prepareHeaders(access_token:string){
    const headerDict = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    }
  
    return {                                                                                                                                                                                 
        headers: new HttpHeaders(headerDict)
    };
  }

  getHeroes(access_token:string){
    let headers = this.prepareHeaders(access_token);
    return new Promise((resolve, reject) => {
        let url = URI + "heroes";
        this.http.get(url, headers).subscribe((data) => {
            this.heroes = data['data'];
            resolve();
        });
    });
  }

  getHero(access_token:string, id:string){
    let headers = this.prepareHeaders(access_token);
    return new Promise((resolve, reject) => {
        let url = URI + "heroes/" + id;
        this.http.get(url, headers).subscribe((data) => {
            this.hero = data['data'];
            resolve();
        });
    });
  }
}

export interface Heroe{
    id: any,
    info: string,
    name: string,
    publisher: any,
    picture: string
}
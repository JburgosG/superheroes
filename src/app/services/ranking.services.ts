import { Injectable } from '@angular/core';

import { URI } from '../config/api.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
    
  likes: any = null;
  ranking: any = {};
  hero_id: any = null;
  dont_likes: any = null;

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

  getRanking(access_token:string){
    let headers = this.prepareHeaders(access_token);
    return new Promise((resolve, reject) => {
        let url = URI + "ranking";
        this.http.get(url, headers).subscribe((data) => {
          this.ranking = data['data'];
          resolve();
        });
    });
  }

  setOption(access_token:string, ptype:string, phero_id:string, paction:string){
    let headers = this.prepareHeaders(access_token);

    let params = {
      type: ptype,
      action: paction,
      hero_id: phero_id
    }

    return new Promise((resolve, reject) => {
      let url = URI + "ranking";
      this.http.post(url, params, headers).subscribe((data) => {
        this.hero_id = phero_id;
        this.saveStorage(ptype);
        resolve();
      });
  });
  }

  saveStorage(ptype:string){
    if(localStorage.getItem(ptype)){
      let json = JSON.parse(localStorage.getItem(ptype));
      json.push(this.hero_id);      
      localStorage.setItem(ptype, JSON.stringify(json));
    }else{      
      localStorage.setItem(ptype, JSON.stringify([this.hero_id]));
    }
  }

  loadStorage(type:string){
    return new Promise((resolve, reject) => {
      if(localStorage.getItem(type)){
        if(type === 'likes'){
          this.likes = localStorage.getItem(type);
        }else{
          this.dont_likes = localStorage.getItem(type);
        }
      }
      resolve();
    });
  }
}
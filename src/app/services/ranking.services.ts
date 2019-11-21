import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CLIENT_ID, CLIENT_SECRET, URI } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
    
  ranking: any = {};

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
}
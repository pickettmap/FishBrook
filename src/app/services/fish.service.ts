import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fishApi } from '../models/fishApi';


@Injectable({
  providedIn: 'root'
})
export class FishService {
  database_endpoint = 'http://project2fisapp-env.eba-rpk7wuxb.us-west-1.elasticbeanstalk.com/fish'

  
  constructor(private httpClient: HttpClient) {
    
   }



  public createFish(data: any): Observable<any> {
    console.log(JSON.stringify(data))
    return this.httpClient.post(this.database_endpoint, data);
  }
}


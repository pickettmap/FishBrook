import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fishApi } from '../models/fishApi';


@Injectable({
  providedIn: 'root'
})
export class FishService {
  baseUrl = 'http://project2fisapp-env.eba-rpk7wuxb.us-west-1.elasticbeanstalk.com/fish'

  constructor(private httpClient: HttpClient) {
    
   }

  public createFish(data: any): Observable<any> {
    console.log(JSON.stringify(data))
    return this.httpClient.post(this.baseUrl, data);
  }

  public getById(id: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GearService {

  database_endpoint = 'http://project2fisapp-env.eba-rpk7wuxb.us-west-1.elasticbeanstalk.com/fish'

  constructor(private httpClient: HttpClient) { }

  public createGear(data: any): Observable<any> {
    return this.httpClient.post(this.database_endpoint, data);
  }
}
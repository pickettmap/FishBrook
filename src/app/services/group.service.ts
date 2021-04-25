import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://project2fisapp-env.eba-rpk7wuxb.us-west-1.elasticbeanstalk.com/group';


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { } 

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}

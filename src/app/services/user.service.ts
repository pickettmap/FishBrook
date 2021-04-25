import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://project2fisapp-env.eba-rpk7wuxb.us-west-1.elasticbeanstalk.com/leaderboard';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:  HttpClient) { }

  getAnglers(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }
}

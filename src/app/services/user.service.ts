import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Angler } from '../models/angler';
import { Observable } from 'rxjs';

const baseUrl = 'http://project2fisapp-env.eba-rpk7wuxb.us-west-1.elasticbeanstalk.com/angler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAnglerByUsername(): Observable<any> {
    return this.http.get(`${baseUrl}/${localStorage.getItem("username")}`)
  }

  getAnglers(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Angler } from '../models/angler';
import { Group } from '../models/group';

const baseUrl = 'http://project2fisapp-env.eba-rpk7wuxb.us-west-1.elasticbeanstalk.com/group';


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { } 

  getAll(): Observable<any[]> {
    return this.http.get<Group[]>(baseUrl)
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  join(data: any, groupname: string): Observable<any> {
    return this.http.put(`${baseUrl}/${groupname}/join`, data)
  }
}

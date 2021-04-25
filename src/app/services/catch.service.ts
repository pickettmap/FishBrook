import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catch } from '../models/catch';
import { AuthService} from '../services/auth.service';

const baseUrl = 'http://project2fisapp-env.eba-rpk7wuxb.us-west-1.elasticbeanstalk.com/catch';



  
@Injectable({
  providedIn: 'root'
})
export class CatchService {

  // httpHeaders = {
  //   headers: new HttpHeaders ({
  //       'Access-Control-Allow-Origin': 'https://localhost:4200',
  //       'Access-Control-Allow-Methods': 'POST',
  //       'Content-Type': 'application/json',
  //       'Accept': '*/*',
  //     })
  // }
  
  constructor(private http: HttpClient,private authService : AuthService) { }


  getAll(): Observable<Catch[]> {
    return this.http.get<Catch[]>(baseUrl);
  }

  get(id: any): Observable<Catch> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}

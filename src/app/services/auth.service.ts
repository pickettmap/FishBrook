
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:9000/authenticate/';

const httpOptions = {
headers: new HttpHeaders({'Content-Type':'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {

   JwtToken = {
    token: "" ,
   }
  storage: any;
  constructor(private http: HttpClient) { }
  

    login(username: string, password : string) : Observable<any> {
      const observable =this.http.post<any>(AUTH_API + 'signin', 
      {username, password}, httpOptions);
    
     observable.subscribe(res=>{
        if(res.jwt){
         localStorage.setItem("token",res.jwt);
        }
      });
      console.log(localStorage.getItem("token"));
      
      return observable;
    }

    register(username: string, password: string, firstName: string, lastName: string, age: number, state: string): Observable<any> {
      const observable = this.http.post<any>(AUTH_API + 'signup' ,  {
        username,
        password,
        firstName,
        lastName,
        age,
        state
      }, httpOptions);

      observable.subscribe(res=>{
        if(res.jwt){
         localStorage.setItem("token",res.jwt);
        }
      });
      console.log(localStorage.getItem("token"));
      
      return observable;
    }

    getToken(){
      return this.storage.getItem('token');
    }

}


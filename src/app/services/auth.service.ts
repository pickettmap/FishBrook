
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';


const AUTH_API = 'http://project2fisapp-env.eba-rpk7wuxb.us-west-1.elasticbeanstalk.com/authenticate/';

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
         localStorage.setItem("username",username);
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
      }, httpOptions).pipe(share());

      observable.subscribe(res=>{
        if(res.jwt){
         localStorage.setItem("token",res.jwt);
         localStorage.setItem("username",username);
        }
      });
      console.log(localStorage.getItem("token"));
      console.log(localStorage.getItem("username"))
      
      return observable;
    }

    getToken(){
      return this.storage.getItem('token');
    }

    isLoggedIn() {
      let token: string | null = localStorage.getItem("token");
      return(token != null && token?.length > 1)
    }

    logout() {
      localStorage.setItem("token","")
      localStorage.setItem("username","")
    }

}


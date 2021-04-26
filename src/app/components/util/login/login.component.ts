import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = ''
  

  constructor(private authService : AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    const{ username, password} = this.form;
    this.authService.login(username, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful= true;
        this.isSignUpFailed=false;

        this.router.navigate(['/aquarium'])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed= true;
        this.router.navigate(['/aquarium'])
      }
    );
  }

}

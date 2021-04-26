import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    password: null,
    firstName: null,
    lastName: null,
    age: null,
    state: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    const {username,password,firstName,lastName,age,state} = this.form;
    this.authService.register(username, password, firstName, lastName, age, state).subscribe(
      data => {
        console.log(data);
        this.isSuccessful= true;
        this.isSignUpFailed=false;

        this.router.navigate(['/home'])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed= true;
      }
    );
  }

}

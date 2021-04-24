import { Component, OnInit, Input } from '@angular/core';
import { fishDetails } from 'src/app/models/fishDetails';
import { FishService } from 'src/app/services/fish.service';

@Component({
  selector: 'app-register-fish',
  templateUrl: './register-fish.component.html',
  styleUrls: ['./register-fish.component.css']
})
export class RegisterFishComponent implements OnInit {

  @Input() fish!: fishDetails;

  constructor(private fishService: FishService) { }

  ngOnInit(): void {
    console.log(this.fish.SpecCode)
  }

  form: any = {
    id: null,
    species: null,
    length: null,
    weight: null,
    habitat: null,
    dangerLevel: null,
    image: null
  }


  onSubmit(): void {
    const {} =  this.form;

  }
  // onSubmit():void{
  //   const{ username, password} = this.form;
  //   this.authService.login(username, password).subscribe(
  //     data => {
  //       console.log(data);
  //       this.isSuccessful= true;
  //       this.isSignUpFailed=false;

  //       this.router.navigate(['/home'])
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isSignUpFailed= true;
  //     }
  //   );
  // }
}

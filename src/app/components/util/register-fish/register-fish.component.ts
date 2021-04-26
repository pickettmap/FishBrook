import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Fish } from 'src/app/models/fish';
import { fishDetails } from 'src/app/models/fishDetails';
import { FishService } from 'src/app/services/fish.service';

@Component({
  selector: 'app-register-fish',
  templateUrl: './register-fish.component.html',
  styleUrls: ['./register-fish.component.css']
})
export class RegisterFishComponent implements OnInit {

  @Input() fish!: fishDetails;
  errorMessage = '';
  isSuccessful = false;

  form: any = {
    // id: null,
    species: null,
    length: null,
    weight: null,
    habitat: null,
    dangerLevel: null,
    image: null
  }

  constructor(private fishService: FishService, private router:Router) { }

  ngOnInit(): void {
    // console.log(this.fish.SpecCode)
  }

  setHabitat(): string {
    if(this.fish.Fresh) {
      return "0"
    }
    if(this.fish.Saltwater) {
      return "1"
    }
    return ''
  }

  setForm() {
    // this.form.id = this.fish.SpecCode
    this.form.species = this.fish.Species
    this.form.dangerLevel = this.fish.Dangerous
    this.form.image = this.fish.image
    this.form.habitat = this.setHabitat()
  }


  onSubmit(): void {
    this.setForm() 

    this.fishService.createFish(this.form).subscribe(
      data => {
        // console.log(data);
        this.isSuccessful = true;

        //TODO: change popup in view fish page
        // console.log(data.id)
        localStorage.setItem("fishid",data.id)
        this.router.navigate(['/registergear'])
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );

  }
}

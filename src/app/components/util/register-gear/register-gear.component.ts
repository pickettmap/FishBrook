import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Gear } from 'src/app/models/gear';
import { Catch } from 'src/app/models/catch';
import { CatchService } from 'src/app/services/catch.service';
import { GearService } from 'src/app/services/gear.service';

@Component({
  selector: 'app-register-gear',
  templateUrl: './register-gear.component.html',
  styleUrls: ['./register-gear.component.css']
})
export class RegisterGearComponent implements OnInit {

   catchsubmission: Catch = {
    username: '',
    fishId: 0,
    gearId: 0
   }
  

  form: any = {
    rod: null,
    fishhook: null,
    bait: null,
    lure: null,
    bobber: null,
    sinkweight: 1
  }
  errorMessage = '';
  isSuccessful = false;

  constructor(private gearService: GearService, private catchService: CatchService, private router:Router) { }

  ngOnInit(): void {
  }

  setFormEnums() {
    switch(this.form.rod) {
      case "None":
        this.form.rod="0";
        break;
      case "Casting":
        this.form.rod="1";
        break;
      case "Spinning":
        this.form.rod="2";
        break;
      case "Light":
        this.form.rod="3"
        break;
      case "Fly":
        this.form.rod="4"
        break;
      case "Surf":
        this.form.rod="5"
        break;
    }

    switch(this.form.fishhook) {
      case "None":
        this.form.fishhook="0";
        break;
      case "Bait":
        this.form.fishhook="1";
        break;
      case "Jig":
        this.form.fishhook="2";
        break;
      case "Siwash":
        this.form.fishhook="3"
        break;
      case "Sickle":
        this.form.fishhook="4"
        break;
      case "Treble":
        this.form.fishhook="5"
        break;
    }

    switch(this.form.bait) {
      case "None":
        this.form.bait="0";
        break;
      case "Live":
        this.form.bait="1";
        break;
      case "Plastic":
        this.form.bait="2";
        break;
    }

    switch(this.form.lure) {
      case "None":
        this.form.lure="0";
        break;
      case "Plug":
        this.form.lure="1";
        break;
      case "Jig":
        this.form.lure="2";
        break;
      case "Spinner":
        this.form.lure="3"
        break;
      case "Spoon":
        this.form.lure="4"
        break;
      case "SoftPlastic":
        this.form.lure="5"
        break;
      case "Fly":
        this.form.lure="6"
        break;
    }

    switch(this.form.bobber) {
      case "None":
        this.form.bobber="0";
        break;
      case "Fixed":
        this.form.bobber="1";
        break;
      case "Slip":
        this.form.bobber="2";
        break;
      case "Stop":
        this.form.bobber="3";
        break;
    }
  }

  onSubmit(): void {
    const submission: any = this.form;
    this.setFormEnums()
    
    this.gearService.createGear(submission).subscribe (
      data => {
        this.isSuccessful = true;
        localStorage.setItem("gearid",data.id)

        this.sendCatch();
      }, 
      err => {
        this.errorMessage = err.error.message;
      }
    )

   
  }

  sendCatch() {
    this.catchsubmission.username = localStorage.getItem("username")!
    this.catchsubmission.fishId = Number(localStorage.getItem("fishid")!)
    this.catchsubmission.gearId = Number(localStorage.getItem("gearid")!)

  this.catchService.create(this.catchsubmission).subscribe(
    data => {
      console.log(data)
      this.isSuccessful = true;

      localStorage.removeItem("fishid")
      localStorage.removeItem("gearid")

      this.router.navigate(['/mycatches'])
    },
    err => {
      this.errorMessage = err.error.message;
    }
  )
  }

}

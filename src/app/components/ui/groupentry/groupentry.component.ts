import { Component, Input, OnInit } from '@angular/core';
import { Fish } from 'src/app/models/fish';
import { fishDetails } from 'src/app/models/fishDetails';
import { Group } from 'src/app/models/group';

@Component({
  selector: 'app-groupentry',
  templateUrl: './groupentry.component.html',
  styleUrls: ['./groupentry.component.css']
})
export class GroupentryComponent implements OnInit {

  @Input() group!:any
  image:string = ""
  
  fishConversion: fishDetails = {
    SpecCode: "",
    Species: "",
    Fresh: 0,
    Brack: 0,
    Saltwater: 0,
    Dangerous: "",
    PicPrefferedName:"",
    image:""
  };

  findAnyImage() {
    for(let angler of this.group.anglers) {
      if(angler.catches.length > 0) {
        this.fishConversion.image = angler.catches[0].fish.image
      }
      else {
        this.fishConversion.image = "https://anima-uploads.s3.amazonaws.com/projects/6074ae6f11c6ad9a56067743/releases/6079da6f1061daf80f9e973a/img/card-image@2x.png"
      }
      
    }
  }

  createBadFish() {
    this.fishConversion.Species = this.group.name

    if(this.group.anglers.length > 0) {
      this.findAnyImage()
    }
    else {
      this.fishConversion.image = "https://anima-uploads.s3.amazonaws.com/projects/6074ae6f11c6ad9a56067743/releases/6079da6f1061daf80f9e973a/img/card-image@2x.png"
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.createBadFish()

  }

}

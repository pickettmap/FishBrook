import { Component, Input, OnInit } from '@angular/core';
import { min } from 'rxjs/operators';
import { Angler } from 'src/app/models/angler';
import { Catch } from 'src/app/models/catch';
import { Fish } from 'src/app/models/fish';
import { fishDetails } from 'src/app/models/fishDetails';
import { CatchService } from 'src/app/services/catch.service';
import { FishService } from 'src/app/services/fish.service';

@Component({
  selector: 'app-leaderboardentry',
  templateUrl: './leaderboardentry.component.html',
  styleUrls: ['./leaderboardentry.component.css']
})
export class LeaderboardentryComponent implements OnInit {

  @Input() angler!:any
  @Input() rank!:number
  catch!: Catch;
  fish!: Fish;
  noName = false;
  

  constructor(private fishService : FishService,private catchService : CatchService) { }

  ngOnInit(): void {
    this.setFish()
    // console.log(this.fish)
  }

  setFish() {
    if(this.angler.firstName == null || this.angler.lastName == null) {
      this.noName = true;
    }
    if(this.angler.catches.length > 0) {
      this.findMaxFish()
    }

  }

  findMaxFish() {
    let max:Number = 0;
    for(let catchy of this.angler.catches) {
      if(catchy.fish.length > max) {
        this.fish = catchy.fish;
      }
    }
  }
}

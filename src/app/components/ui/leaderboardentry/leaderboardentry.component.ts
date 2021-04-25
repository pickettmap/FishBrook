import { Component, Input, OnInit } from '@angular/core';
import { Angler } from 'src/app/models/angler';
import { Catch } from 'src/app/models/catch';
import { fishDetails } from 'src/app/models/fishDetails';
import { CatchService } from 'src/app/services/catch.service';
import { FishService } from 'src/app/services/fish.service';

@Component({
  selector: 'app-leaderboardentry',
  templateUrl: './leaderboardentry.component.html',
  styleUrls: ['./leaderboardentry.component.css']
})
export class LeaderboardentryComponent implements OnInit {

  @Input() angler!:Angler
  catch!: Catch;
  fish!: fishDetails;

  constructor(private fishService : FishService,private catchService : CatchService) { }

  getFishInfo() {
    catch = this.catchService.getAll()
    fish = this.fishService.getFish(catch.fishID)
    }

  ngOnInit(): void {
  }



}

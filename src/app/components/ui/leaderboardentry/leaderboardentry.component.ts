import { Component, Input, OnInit } from '@angular/core';
import { Angler } from 'src/app/models/angler';
import { Catch } from 'src/app/models/catch';
import { fishDetails } from 'src/app/models/fishDetails';

@Component({
  selector: 'app-leaderboardentry',
  templateUrl: './leaderboardentry.component.html',
  styleUrls: ['./leaderboardentry.component.css']
})
export class LeaderboardentryComponent implements OnInit {

  @Input() angler!:Angler
  catch!: Catch;
  fish!: fishDetails;

  constructor() { }

  ngOnInit(): void {
  }

}

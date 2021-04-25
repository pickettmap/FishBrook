import { Component, OnInit } from '@angular/core';
import { Angler } from 'src/app/models/angler';

@Component({
  selector: 'app-leaderboardlist',
  templateUrl: './leaderboardlist.component.html',
  styleUrls: ['./leaderboardlist.component.css']
})
export class LeaderboardlistComponent implements OnInit {

  leaderboardUsers: Angler[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

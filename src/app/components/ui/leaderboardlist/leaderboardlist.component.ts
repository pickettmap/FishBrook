import { Component, OnInit } from '@angular/core';
import { Angler } from 'src/app/models/angler';
import {UserService} from 'src/app/services/user.service'

@Component({
  selector: 'app-leaderboardlist',
  templateUrl: './leaderboardlist.component.html',
  styleUrls: ['./leaderboardlist.component.css']
})
export class LeaderboardlistComponent implements OnInit {

  page = 1;
  count = 0;
  pageSize = 3;
  leaderboardUsers: Angler[] = [];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getAnglers
  }

  getAnglers() : void{
    this.userService.getAnglers()
    .subscribe(
      (response) => {this.leaderboardUsers.push(response)})
  }

  
  handlePageChange(event: number): void {
    this.page = event;
    this.getAnglers();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getAnglers();
  }

}

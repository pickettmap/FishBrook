import { Component, OnInit } from '@angular/core';
import { Angler } from 'src/app/models/angler';
import { Group } from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-grouplist',
  templateUrl: './my-grouplist.component.html',
  styleUrls: ['./my-grouplist.component.css']
})
export class MyGrouplistComponent implements OnInit {

  groups: any[] = []
  currentAngler!: Angler;

  constructor(private groupService: GroupService, private userService: UserService) { }

  ngOnInit(): void {
    this.getAngler()
  }

  getAngler(): void{
    this.userService.getAnglerByUsername().subscribe(
      data=> {
        this.currentAngler = data;
        this.groups = data.groups;
      }
    )
  }
}

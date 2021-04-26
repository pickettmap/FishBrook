import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {

  groups: any[] = []

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.getGroups()
  }

  getGroups(): void{
    this.groupService.getAll().subscribe(
      (response: any) => {
        for(let group of response) {
          console.log(group)
          if(group.anglers){
            this.groups.push(group)
          }
        }
      }
    )

  }

}

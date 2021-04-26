import { Component, OnInit } from '@angular/core';
import { Angler } from 'src/app/models/angler';
import { Catch } from 'src/app/models/catch';
import { fishDetails } from 'src/app/models/fishDetails';
import { FishService } from 'src/app/services/fish.service';
import { UserService } from 'src/app/services/user.service';
import { PageEvent } from '@angular/material/paginator';
import { Fish } from 'src/app/models/fish';

@Component({
  selector: 'app-catch-list',
  templateUrl: './catch-list.component.html',
  styleUrls: ['./catch-list.component.css']
})
export class CatchListComponent implements OnInit {

  currentAngler!: Angler;
  anglerCatches: any[] = [];
  anglerFish: any[] = [];
  fishPage: any[] = [];
  show: boolean = false;

  selectedCatch!:Catch;

  constructor(private userService: UserService, private fishService: FishService) { }

  ngOnInit(): void {
    this.getAngler()
  }

  toggle(fish: Fish){
    for(let catchy of this.anglerCatches) {
      if(fish.id == catchy.fish.id) {
        this.selectedCatch = catchy;
        console.log(this.selectedCatch)
      }
    }
    this.show = !this.show;
  }

  recieveMessage($event: boolean) {
    this.show = $event
  }

  getAngler() {
    this.userService.getAnglerByUsername().subscribe(
      data=> {
        this.currentAngler = data;
        this.anglerCatches = data.catches;
        this.getFish();
      }
    )
  }

  getFish() {
    let id: number
    for(let catches of this.anglerCatches) {
      id = JSON.parse(JSON.stringify(catches)).fish.id
      this.fishService.getById(id).subscribe( 
        (data:any) => {
          // console.log(data);
          this.anglerFish.push(data)
          this.fishPage =  this.anglerFish.slice(0,15);
        }
      )
    }
  }

  
  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    if(endIndex > this.anglerFish.length) {
      endIndex = this.anglerFish.length;
    }

    this.fishPage = this.anglerFish.slice(startIndex, endIndex);
  }

}

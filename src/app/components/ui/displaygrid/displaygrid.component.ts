import { Component, OnInit } from '@angular/core';
import { fishDetails } from 'src/app/models/fishDetails';
import { FishService } from 'src/app/services/fish.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-displaygrid',
  templateUrl: './displaygrid.component.html',
  styleUrls: ['./displaygrid.component.css']
})
export class DisplaygridComponent implements OnInit {

  fishes: fishDetails[] = [];
  fishPage: fishDetails[] = [];
  public show: boolean = false;

  selectedFish!: fishDetails;

  constructor(private fishService: FishService) { }


  ngOnInit(): void {
    this.getFish();
  }

  toggle(fish: fishDetails) {
    this.selectedFish = fish;
    this.show = !this.show;
  }

  getFish(): void {
    this.fishService.getFish()
    .subscribe((response: any) => {
        response.data.forEach((result:any) => {
          let id:string;
          id = JSON.stringify(result).substring(12,17)
          
          this.getFishDetails(id)
        });
      });
    };


  getFishDetails(id: string): void{

    this.fishService
    .getFishById(id)
    .subscribe((details: any) => {
      let fishInfo:Object = JSON.parse(JSON.stringify(details))
      details = (Object.values(fishInfo)[2])
        this.fishes.push(details["0"]);
        this.fishPage =  this.fishes.slice(0,15);
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    if(endIndex > this.fishes.length) {
      endIndex = this.fishes.length;
    }

    this.fishPage = this.fishes.slice(startIndex, endIndex);
  }
}
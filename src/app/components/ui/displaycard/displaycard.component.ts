import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Fish, fishApi, fishDetails } from 'src/app/models';
import { FishService } from 'src/app/services/fish.service';


@Component({
  selector: 'app-displaycard',
  templateUrl: './displaycard.component.html',
  styleUrls: ['./displaycard.component.css']
})

export class DisplaycardComponent implements OnInit {
  fishes: fishDetails[] = [];

  constructor(private fishService: FishService) { }


  ngOnInit(): void {
    this.getFish();
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
    });
  }
}


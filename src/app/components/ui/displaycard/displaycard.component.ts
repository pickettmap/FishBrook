import { Component, Input, OnInit } from '@angular/core';
import { fishDetails } from 'src/app/models/fishDetails';
import { FishService } from 'src/app/services/fish.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-displaycard',
  templateUrl: './displaycard.component.html',
  styleUrls: ['./displaycard.component.css']
})

export class DisplaycardComponent implements OnInit {
  @Input() fish!: any;

  constructor() { }


  ngOnInit(): void {
    // console.log(this.fish.Species)
  }

  
}


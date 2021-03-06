import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Catch } from 'src/app/models/catch';
import { Fish } from 'src/app/models/fish';
import { Gear } from 'src/app/models/gear';

@Component({
  selector: 'app-catch-display',
  templateUrl: './catch-display.component.html',
  styleUrls: ['./catch-display.component.css']
})
export class CatchDisplayComponent implements OnInit {

  @Input() singleCatch!:any
  singleFish!: Fish
  singleGear!: Gear

  show: boolean = false
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.singleCatch)
  }

  sendMessage() {
    this.messageEvent.emit(this.show)
  }

}

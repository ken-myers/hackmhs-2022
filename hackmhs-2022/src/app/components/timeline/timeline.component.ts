import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass']
})
export class TimelineComponent implements OnInit {

  constructor() { 
    document.body.style.backgroundColor = "#474e5d";
  }
  ngOnDestroy() {
    document.body.style.backgroundColor = "white";
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { SessionDataService } from 'src/app/services/session-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  orgCode: string = "";

  constructor(private sessionDataService: SessionDataService) { 
    sessionDataService.get("orgCode").subscribe((c: string) => {
      this.orgCode = c;
    });
  }

  ngOnInit(): void {
  }

}

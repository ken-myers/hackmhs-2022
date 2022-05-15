import { Component, Input, OnInit } from '@angular/core';
import { User } from '../shared/services/user';

@Component({
  selector: 'app-team-summary',
  templateUrl: './team-summary.component.html',
  styleUrls: ['./team-summary.component.sass']
})
export class TeamSummaryComponent implements OnInit {


  @Input() user!: User;
  orgCode: string = this.user.org_code;
  constructor() {
  }


  ngOnInit(): void {
    this.orgCode = this.user.org_code;
  }
}

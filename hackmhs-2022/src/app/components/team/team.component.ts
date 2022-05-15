import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})


export class TeamComponent implements OnInit {

  team: User[] = [];

  @Input() teamCode!: string;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeam(this.teamCode).subscribe((t)=> {
      this.team = t;
    })
  }

}

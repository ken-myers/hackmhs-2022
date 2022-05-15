import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamService } from 'src/app/services/team.service';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})


export class TeamComponent implements OnInit {

  team$: Observable<User[]>;

  @Input() teamCode!: string;

  constructor(private teamService: TeamService) {
    this.team$ = this.teamService.getUsers(this.teamCode);
  }

  ngOnInit(): void {
    
  }

}

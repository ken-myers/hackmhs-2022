import { Component, OnInit } from '@angular/core';
import { SessionDataService } from 'src/app/services/session-data.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  orgCode: string = "";
  userID: string = "";
  user: User = <User>{};
  constructor(private userService: UserService, private sessionDataService: SessionDataService) { 
    this.userID = sessionDataService.get('userID');
    userService.getUser(this.userID).subscribe((u: User)=>{
      this.user = u;
    });

    console.log(this.user)
  }

  ngOnInit(): void {
  }

}

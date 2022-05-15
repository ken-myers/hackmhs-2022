import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionDataService } from 'src/app/services/session-data.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  userEmail: string = "";
  // is this good???
  user$: Observable<User>;
  constructor(private userService: UserService, private sessionDataService: SessionDataService) {
    this.userEmail = this.sessionDataService.get('userEmail');
    this.user$ = this.userService.getUser(this.userEmail);

  }

  ngOnInit(): void {

  }

}

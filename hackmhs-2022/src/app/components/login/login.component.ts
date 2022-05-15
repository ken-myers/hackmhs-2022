import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionDataService } from 'src/app/services/session-data.service';
import { AuthService } from "../../shared/services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private sessionDataService: SessionDataService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {

  }

  submit(code: string): void {
    console.log(code);
    this.sessionDataService.set('orgCode', code);
    this.router.navigate(['home']);
  }
}

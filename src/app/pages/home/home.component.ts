import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  constructor(private route: Router,
    private userService: UserService) {
    this.userService.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;

    });

  }
  ngOnInit() {

  }
  goToLogin() {
    this.route.navigateByUrl('/login');
  }

  goToRegister() {
    this.route.navigateByUrl('/register');
  }

}

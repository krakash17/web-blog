import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  User: any;
  loggedIn = false;
  isUserLoggedIn: boolean = false;

  constructor(private route: Router,
    private userService: UserService) {
    this.userService.isUserLoggedIn.subscribe(value => {
      this.getUser();
      this.isUserLoggedIn = value;
    });
  }

  ngOnInit() {

  }

  getUser() {
    this.User = JSON.parse(localStorage.getItem('User')!);
    if (this.User) {
      this.loggedIn = true;
    }
  }


  logOut() {
    localStorage.removeItem('User');
    this.route.navigateByUrl('');
    this.userService.isUserLoggedIn.next(false);
  }
}

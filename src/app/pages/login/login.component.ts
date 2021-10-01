import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 token: any = {}
  loginForm: FormGroup;
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ]
  };

  constructor(private ngZone: NgZone,
    private http: HttpClient,
    private route: Router,
    private userService: UserService) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  ngOnInit(): void {
  }
  userDatabase: any;
  userData = {}
  loggedIn = false;

  //function for loogging into the app
  loginUser() {
    

        const userData = {
          "email":this.loginForm.value.email,
          "password":this.loginForm.value.password
         
        }

        var url = 'localhost:8001/auth/user'
        this.http.post('http://localhost:8001/auth/user-login',userData).subscribe(res => {
          console.log(res)
          this.token = res;
          localStorage.setItem('token', JSON.stringify(this.token.data))
          this.route.navigateByUrl('/posts');
          this.loggedIn = true;
          this.userService.isUserLoggedIn.next(true);
        },
        err => {
          console.log(err);
        }
        )
  }
}

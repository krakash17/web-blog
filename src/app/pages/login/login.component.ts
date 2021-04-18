import { Component, OnInit,NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FORM_ERROR } from 'final-form'
import { Console } from 'console';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


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
    private route: Router) {
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
  userDatabase: any =[];
  userData = {}
  loginUser(){
    const username = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.userDatabase = localStorage.getItem('data');

    for(let i=0;i<this.userDatabase.length; i++){
      if(username === this.userDatabase[i].username && password === this.userDatabase[i].password ){
        this.userData = this.userDatabase[i];
        this.route.navigateByUrl('/posts');
      }
    }


    const userData = {
      username: username,
      password: password
    }

    localStorage.setItem('User',JSON.stringify(userData))
    console.log(username);
    console.log(password);


  }
}

import { Component, OnInit,NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FORM_ERROR } from 'final-form'

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

  constructor(private ngZone: NgZone,) {
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
  loginUser(){
    const username = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    console.log(username);
    console.log(password);


  }
}

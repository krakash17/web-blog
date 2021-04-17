import { Component, OnInit,NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;


  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ],

    'confirmPassword': [
      { type: 'required', message: 'Password is required.' },
      { type: 'match', message: 'Password must be matched' }
    ],
    'name': [
      { type: 'required', message: 'name is required.' },

    ],
    'number': [
      { type: 'required', message: 'Mobile number is required.' },
      { type: 'pattern', message: 'Enter a valid Mobile Number.' }
    ],
  };

    constructor(private ngZone: NgZone,) {
      this.registerForm = new FormGroup({
        'email': new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        'password': new FormControl('', Validators.compose([
          Validators.required
        ])),
        'confirmPassword': new FormControl('', Validators.compose([
          Validators.required
        ])),
        'name': new FormControl('', Validators.compose([
          Validators.required
        ])),
        'number': new FormControl('', Validators.compose([
          Validators.required
        ])),
      });
     }

    ngOnInit(): void {
    }
    registerUser(){
      const username = this.registerForm.value.email;
      const password = this.registerForm.value.password;
      const confirmPassword = this.registerForm.value.confirmPassword;

      const name = this.registerForm.value.name;
      const number = this.registerForm.value.number;
      console.log(username);
      console.log(password);
      console.log(confirmPassword);
      console.log(name);
      console.log(number)


    }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit,NgZone } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userDatabase: any = []
  allUserData: any =[]
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

    constructor(private ngZone: NgZone,
      private http: HttpClient,
      private route: Router) {
      this.registerForm = new FormGroup({
        'email': new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        'password': new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6)
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




    //function for registering the user to localstorage
    registerUser(){

      
      const data =
        { 
         "email":this.registerForm.value.email,
         "password":this.registerForm.value.password,
         "name":this.registerForm.value.name,
         "number": this.registerForm.value.number.toString(),
        }
        console.log(data)
        var url = 'localhost:8001/auth/user'
        this.http.post('http://localhost:8001/auth/user',data).subscribe(res => {
          console.log(res)
          this.route.navigateByUrl('login')
        },
        err => {
          console.log(err);
        }
        )



    // var userId;
    //  this.allUserData = JSON.parse(localStorage.getItem('data')!);
    //  if(this.allUserData === null){
    //   userId = 1;
    //   this.allUserData =[];

    //  }
    //  else{
    //    userId = this.allUserData.length + 1
    //  }
    //   const data =
    //     { "id": userId,
    //      "username":this.registerForm.value.email,
    //      "password":this.registerForm.value.password,
    //      "name":this.registerForm.value.name,
    //      "number": this.registerForm.value.number,
    //     }
    //     this.allUserData.push(data);
    //     localStorage.setItem('data',JSON.stringify(this.allUserData))
    //     alert('User Added Succesfully');
    //     this.route.navigateByUrl('login');
     }
}

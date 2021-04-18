import { Component, OnInit,NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

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
    private route: Router,
    private userService : UserService) {
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
  loginUser(){
    const username = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.userDatabase = JSON.parse(localStorage.getItem('data')!);
    
    for(var i=0; i<this.userDatabase.length; i++){
      if(username === this.userDatabase[i].username && password === this.userDatabase[i].password ){
        const userData = {
          "username": username,
          "name": this.userDatabase[i].name,
          "number": this.userDatabase[i].number,
          "id":this.userDatabase[i].id
        }
    
        localStorage.setItem('User',JSON.stringify(userData))
        console.log(username);
        console.log(password);
        this.route.navigateByUrl('/posts');
        this.loggedIn = true;
        this.userService.isUserLoggedIn.next(true);
        break;
      }
      

    }
    if(!this.loggedIn){
      alert('Wrong Credentials');
    }



    


  }
}

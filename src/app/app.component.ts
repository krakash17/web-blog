import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isUserLoggedIn:boolean = false;

  constructor(private route: Router,
  private userService: UserService) 


  { 

    //check for restricting the route changing 
    this.userService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
  });
  if(JSON.parse(localStorage.getItem('token')!)){
    this.userService.isUserLoggedIn.next(true);
  }

  if(!this.isUserLoggedIn){
    this.route.navigateByUrl('')
  }
  else{
    this.route.navigateByUrl('posts');

  }


  }
  ngOnInit(){
   
  }
}

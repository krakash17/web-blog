import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

    //use of behaviour subject for checking user logged in or not
    public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

}
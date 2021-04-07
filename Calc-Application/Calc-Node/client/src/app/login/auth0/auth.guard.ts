import { Injectable } from '@angular/core';
import {
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { CanActivate } from '@angular/router';
import { Auth } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: Auth, private router: Router) { }
    /** 
    *@summary Method for Check Authendication for Component
    *@param{ Router Current state , RouterStateSnapshot }
    *@returns true or false
    */
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.auth.authenticated()) {           
            return true;
        }
        //if not authenticated redirect to login Page
        else {
            this.router.navigate(['login']);
            return false;
        }
    }
}

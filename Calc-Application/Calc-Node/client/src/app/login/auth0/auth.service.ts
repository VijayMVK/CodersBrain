import { Injectable, EventEmitter } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { myConfig } from './auth.config';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

// Avoid name not found warnings
declare var Auth0: any;
declare var Auth0Lock: any;

@Injectable()
export class Auth {
    // Configure Auth0
    userProfile: any;
    prom: any;
    auth0 = new Auth0({
        domain: myConfig.domain,
        clientID: myConfig.clientID,
        callbackOnLocationHash: true,
        callbackURL: myConfig.callbackURL
    });

    lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});

    public profileChange = new EventEmitter();

    constructor(private router: Router) {
       
        var result = this.auth0.parseHash(window.location.hash);
        if (result) {
            localStorage.setItem('id_token', result.idToken);
            this.getUserProfile();
        }
    };  


      /** 
    *@summary Method for get UserProfile based on accesstoken
    *@param{} 
    *@returns
    */
    getUserProfile():any {        
        this.lock.getProfile(localStorage.getItem('id_token'), (error:any, profile:any) => {
            if (error) {
                // Handle error
                alert(error);
                return;
            }
            this.userProfile = profile;           
            localStorage.setItem('profile', JSON.stringify({ username: this.userProfile.nickname, role: this.userProfile.roles}));
            this.profileChange.emit(this.userProfile.nickname);
            console.log(this.userProfile);
            return this.userProfile;
        });
    }

     /** 
    *@summary Method for Check the User Role
    *@param{} 
    *@returns User Roles
    */
    checkUserRole() { return this.userProfile ? this.userProfile.roles: '' }


     /** 
    *@summary Method for login
    *@param{username,password} 
    *@returns accestoken or Error message
    */
    public login(username:any, password:any) {       
        this.auth0.login({
            connection: 'Username-Password-Authentication',
            responseType: 'token',
            email: username,
            password: password,
        }, function (err:any) {
            if (err) {
                console.log(err);
                alert("something went wrong: " + err.message)
            }
        });
    };

     /** 
    *@summary Method for Check the Authendication
    *@param{} 
    *@returns true or false
    */
    public authenticated() {

        // Check if there's an unexpired JWT
        // It searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };


        /** 
    *@summary Method for Logout
    *@param{} 
    *@returns
    */

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        localStorage.removeItem('username');
        this.router.navigate(['login']);
    };
}

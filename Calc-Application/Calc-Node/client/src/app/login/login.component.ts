import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './auth0/auth.service';

@Component({
    selector: 'login',
    styleUrls: ['login.css'],
    templateUrl: 'login.component.html'
})

export class LoginComponent{
    model: any = {};
    loading = false;
    error = '';

    constructor(private router: Router,private auth: Auth) { }
}

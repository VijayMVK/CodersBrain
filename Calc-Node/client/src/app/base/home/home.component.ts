import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Auth } from '../../login/auth0/auth.service';

declare var username: any; 
declare var role: any; 
@Component({
  
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
    subscription: any;
    username: any;   
    constructor(private router: Router, private auth: Auth) {
    }

    ngOnInit() {      
        this.style = "rtl";    
        if (this.auth.authenticated()) {
            this.subscription = this.auth.profileChange.subscribe(
                (username: any) => {
                    this.username = username;
                    localStorage.setItem('username', this.username);
                    console.log(this.username);                   
                }
            );           
        }  
        if (localStorage.getItem('username'))
            this.username = localStorage.getItem('username');
    }

    ngOnDestroy() {     
        this.subscription.unsubscribe();
    }

    public disabled: boolean = false;
    public status: { isopen: boolean } = { isopen: false };

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    private style: string;
    public clicked(): void {
        if (this.style === 'rtl')
            this.style = 'ltr';
        else
            this.style = 'rtl';
        let links = document.getElementsByTagName("link");
        for (let i = 0; i < links.length; i++) {
            var link = links[i];
            if (link.getAttribute("rel").indexOf("style") != -1 && link.getAttribute("title")) {
                link.disabled = true;
                if (link.getAttribute("title") === this.style)
                    link.disabled = false;
            }
        }

    }
}
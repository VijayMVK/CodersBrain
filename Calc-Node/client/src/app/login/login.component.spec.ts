import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { Auth } from './auth0/auth.service';
import {TestBed, inject, tick, async, getTestBed, ComponentFixture} from '@angular/core/testing';
import { UnauthorizedComponent } from '../login/auth0/unauthorized.component';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from '../app.routing';



import { HomeComponent } from '../base/home/home.component';
import { LeftNavMenuComponent } from '../base/left-nav-menu/left-nav-menu.component';
import { BreadcrumbsComponent } from '../shared/breadcrumb.component';
import { AsideToggleDirective } from '../shared/aside.directive';
import { NAV_DROPDOWN_DIRECTIVES } from '../shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from '../shared/sidebar.directive';

import 'rxjs/Rx';

describe('LoginComponent', () => {
  let router: Router;
  let auth: Auth;

  beforeAll(function () {
    console.log("beforeAll");

    let fixture: ComponentFixture<LoginComponent>;
    let login: LoginComponent;

    TestBed.configureTestingModule({
      declarations: [UnauthorizedComponent, LoginComponent
      ],
      providers: [Auth, { provide: Auth }],
      imports: [FormsModule, HttpModule, BrowserModule, routing,
      ]
    });

    router = jasmine.createSpyObj("Router", ['navigate']);
    this.app = new LoginComponent(router, auth);
    this.service = new Auth(router);
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(LoginComponent);
      login = fixture.componentInstance;

    });
    if (!localStorage.getItem('id_token')) {
      console.log("Inside");
      this.service.login("vijayak023@gmail.com", "1234");
    }
  })



  beforeEach(function () {
    console.log("beforeEach");
    let fixture: ComponentFixture<LoginComponent>;
    let login: LoginComponent;

    TestBed.configureTestingModule({
      declarations: [UnauthorizedComponent, LoginComponent
      ],
      providers: [Auth, { provide: Auth }],
      imports: [FormsModule, HttpModule, BrowserModule, routing,
      ]
    });

    router = jasmine.createSpyObj("Router", ['navigate']);
    this.app = new LoginComponent(router, auth);
    this.service = new Auth(router);
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(LoginComponent);
      login = fixture.componentInstance;

    });
  });



  it('should create the app', async(() => {
    getTestBed().compileComponents().then(() => {
      let fixture = TestBed.createComponent(LoginComponent);
      let app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
  }));


  it('should be service', function () {
    expect(Auth).toBeDefined();
  });


  it('should create login with service', () => {
    TestBed.compileComponents().then(async(inject([Auth], (auth: any) => {
      getTestBed().compileComponents().then(() => {
        var fixture = TestBed.createComponent(LoginComponent);
        fixture.detectChanges();
      });
    })));
  });


  it('should Login', function () {
    expect(localStorage.getItem('id_token')).not.toEqual(null);
  });


  it('should Authendicated', function () {
    expect(this.service.authenticated()).toBe(true);
  });


  it('should Logout', function () {
    this.service.logout();
    expect(localStorage.getItem('id_token')).toBe(null);
  })

});
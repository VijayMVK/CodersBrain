import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ButtonsModule,DatepickerModule,BsDropdownModule,TimepickerModule }  from 'ngx-bootstrap';

import { BaseModule } from './base/base.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { routing } from './app.routing';

import { HomeComponent } from './base/home/home.component';
import { LeftNavMenuComponent } from './base/left-nav-menu/left-nav-menu.component';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { AsideToggleDirective } from './shared/aside.directive';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { LoginComponent } from './login/index';

import { GlobalDataService } from './shared/services/globaldata.service';

//Auth0 Library
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { Auth } from './login/auth0/auth.service';
import { AuthGuard } from './login/auth0/auth.guard';
import { UnauthorizedComponent } from './login/auth0/unauthorized.component';

//temp
import { ReactiveFormsModule  }   from '@angular/forms';
import { EmployeeComponent } from './shared/component/employee.component'
import { EmployeeListService } from './shared/services/employee.service'



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,     
        routing,       
        DashboardModule,
        ButtonsModule.forRoot(),
        DatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        TimepickerModule.forRoot(),
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,      
        LoginComponent,
        HomeComponent,
        LeftNavMenuComponent,
        BreadcrumbsComponent,
        AsideToggleDirective,
        NAV_DROPDOWN_DIRECTIVES,
        SIDEBAR_TOGGLE_DIRECTIVES,
        UnauthorizedComponent
    ],

    providers: [
        AuthGuard,
        AUTH_PROVIDERS,        
        Auth,
        GlobalDataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

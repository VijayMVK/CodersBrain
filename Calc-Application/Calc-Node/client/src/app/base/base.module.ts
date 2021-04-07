import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsModule,DatepickerModule,BsDropdownModule,TimepickerModule }  from 'ngx-bootstrap';
import { BaseRouting }  from './base.routing';

@NgModule({
    imports: [     
        BrowserModule,   
         ButtonsModule,
         DatepickerModule,
         BsDropdownModule,
         TimepickerModule,     
        BaseRouting     
    ],
    declarations: [ ]
    
})
export class BaseModule {      
    ngOnInit(): void { }
}

import { NgModule }  from '@angular/core';
import { CartonComponent } from './carton.component';
import { CartonRouting } from './carton.routing';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    imports: [
        FormsModule,
        CommonModule, // added to avoid error in NgIf while lazy load
        CartonRouting
    ],
    declarations: [
        CartonComponent
    ],
    exports: [
        CartonComponent, ReactiveFormsModule, RouterModule
    ], providers: []
})
export class CartonModule {

}

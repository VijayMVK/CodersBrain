import { NgModule }  from '@angular/core';
import { IroningComponent } from './ironing.component';
import { IroningRouting } from './ironing.routing';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        IroningRouting
    ],
    declarations: [
        IroningComponent
    ],
    exports: [
        IroningComponent, ReactiveFormsModule, RouterModule
    ], providers: []
})
export class IroningModule {
}

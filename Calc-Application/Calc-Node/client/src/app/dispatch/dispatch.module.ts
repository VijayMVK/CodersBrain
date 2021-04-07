import { NgModule }  from '@angular/core';
import { NgxBarcodeModule } from 'ngx-barcode';
import { DispatchComponent } from './dispatch.component';
import { DispatchRouting } from './dispatch.routing';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    imports: [
        FormsModule,
        CommonModule, // added to avoid error in NgIf while lazy load
        DispatchRouting,
        NgxBarcodeModule
    ],
    declarations: [
        DispatchComponent
    ],
    exports: [
        DispatchComponent, ReactiveFormsModule, RouterModule
    ], providers: []
})
export class DispatchModule {

}

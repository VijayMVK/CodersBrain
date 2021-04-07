import { NgModule }  from '@angular/core';
import { StoresDeliveryComponent } from './stores-delivery.component';
import { StoresDeliveryRouting } from './stores-delivery.routing';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
    imports: [
        FormsModule,
        CommonModule, // added to avoid error in NgIf while lazy load
        StoresDeliveryRouting,
        NgxBarcodeModule
    ],
    declarations: [
        StoresDeliveryComponent
    ],
    exports: [
        StoresDeliveryComponent, ReactiveFormsModule, RouterModule
    ], providers: []
})
export class StoresDeliveryModule {

}

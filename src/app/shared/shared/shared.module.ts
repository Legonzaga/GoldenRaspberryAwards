import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DefaultSpinnerComponent } from './components/default-spinner/default-spinner.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


const sharedModules = [
  IonicModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  RouterModule
];

const sharedComponets = [
  DefaultSpinnerComponent
];

@NgModule({
  declarations: [
    DefaultSpinnerComponent,
    ...sharedComponets,
  ],
  imports: [
    CommonModule,
    ...sharedModules
  ],
  exports: [
    CommonModule,
    DefaultSpinnerComponent
  ]
})
export class SharedModule { }
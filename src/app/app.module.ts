import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from './patient.service';






@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule,
    HttpClientModule
  ],
  providers:[ PatientService]
})
export class AppModule { }

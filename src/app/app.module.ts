import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { PatientService } from './patient.service';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule,
    HttpClientModule, 
    FormsModule
  ],
  providers:[ PatientService]
})
export class AppModule { }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-patient',
  standalone: true,
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  imports:[CommonModule]
})
export class PatientComponent {
  people: any[] = [];
  

  constructor(private router : Router, private patientService: PatientService) {}
    
  
   
  ngOnInit(): void {
    this.loadPatients(); 

  }

  loadPatients(): void {
    this.patientService.getAllPatients().subscribe(
      data => {
        this.people = data;
      },
      error => {
        console.log('Error fetching patients:', error);
      }
    );
  }

  editPatient(id: number): void {
  
    this.router.navigate(['/form1', id]);
  }

  deletePatient(id: number): void {
    this.patientService.deletePatient(id).subscribe(
      () => {
       
        this.loadPatients();
      },
      error => {
        console.log('Error deleting patient:', error);
      }
    );
  }

  navigate(): void
  {
    this.router.navigateByUrl("page-result");
  }
}



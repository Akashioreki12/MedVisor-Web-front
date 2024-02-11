import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PatientService } from '../../patient.service';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient',
  standalone: true,
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  imports:[CommonModule, FormsModule, RouterModule],
  providers:[HttpClient]

})
export class PatientComponent implements OnInit {
  people: Patient[] = [];
  searchQuery: string = ""; 
  searchResults: Patient[] = []; 
  selectedPerson: Patient | null = null;
  searchDate: string = "";
  constructor(private router: Router, private patientService: PatientService, private http: HttpClient) {}

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

 

  deletePatient(id: number): void {
    this.patientService.deletePatient(id).subscribe(
        () => {
            this.loadPatients(); // Reload patients after deletion
        },
        error => {
            console.log('Error deleting patient:', error);
        }
    );
}


  editPerson(id : number): void{
    this.router.navigateByUrl("/form2");
  }

  navigate(): void {
    this.router.navigateByUrl("/page-result");
  }
  selectPerson(person: Patient, event: MouseEvent): void {
    // Check if the target element is one of the function icons
    const target = event.target as HTMLElement;
    const isFunctionIcon = target.classList.contains('actp') || target.classList.contains('actm') || target.tagName === 'BUTTON';

    if (!isFunctionIcon) {
        // If the clicked element is not a function icon, select the person and navigate
        this.selectedPerson = person;
        this.router.navigateByUrl("/form2");
    }
}


  searchPatients(): void {
    if (this.searchQuery.trim() !== '' || this.searchDate.trim() !== '') {
     
      if (this.searchQuery.trim() !== '') {
        
        this.patientService.searchPatients(this.searchQuery).subscribe(
          data => {
            this.people = data;
          },
          error => {
            console.log('Error searching patients by name:', error);
          }
        );
      } else {
        // Search by date
        this.patientService.searchPatientsByDate(this.searchDate).subscribe(
          data => {
            this.people = data;
          },
          error => {
            console.log('Error searching patients by date:', error);
          }
        );
      }
    } else {
      // If both searchQuery and searchDate are empty, reload all patients
      this.loadPatients();
    }
  }


  displayClinicalInfo(person: any): void {
    this.patientService.getSurveyData(person.id).subscribe(
        (data: any) => {
            person.clinicalInfo = data; // Assign clinicalInfo to the person object
        },
        error => {
            console.log('Error fetching clinical info:', error);
        }
    );
}
  
}

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
  selectedSurvey:any;
   // Assuming you have a list of surveys
    currentPage: number = 1;
    pageSize: number = 10; 
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
    console.log(this.selectedPerson);
    this.router.navigateByUrl("/ai");
  }

  navigate(): void {
    this.router.navigateByUrl("/page-result");
  }
  selectPerson(person: Patient, event: MouseEvent): void {
    // Check if the target element is one of the function icons
    const target = event.target as HTMLElement;
    const isFunctionIcon = target.classList.contains('actp') || target.classList.contains('actm') ;

    if (!isFunctionIcon) {
      //   If the clicked element is not a function icon, select the person and navigate
        this.selectedPerson = person;
        this.loadSurvey(person.id);
       // this.router.navigateByUrl("/form2");
    }
}
selecteditPerson(personid:number): void {
  this.patientService.getPatientById(personid).subscribe(
    (data: any) => { 
             this.router.navigate(['/ai'], { queryParams: { selectedPerson: JSON.stringify(data) } });

    },
    error => {
        console.log('Error fetching patient:', error);
    }
  );
  



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



loadSurvey(patientId: number): void {
  this.patientService.getSurveyData(patientId).subscribe(
    data => {
      this.selectedSurvey = data;
    },
    error => {
      console.log('Error fetching survey:', error);
    }
  );
}

get totalPages(): number {
  return Math.ceil(this.people.length / this.pageSize);
}

// Function to get the current page of survey data
get currentSurveys(): any {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  return this.people.slice(startIndex, endIndex);
}

// Function to navigate to the previous page
previousPage(): void {
  if (this.currentPage > 1) {
      this.currentPage--;
  }
}

// Function to navigate to the next page
nextPage(): void {
  if (this.currentPage < this.totalPages) {
      this.currentPage++;
  }
}
 
}

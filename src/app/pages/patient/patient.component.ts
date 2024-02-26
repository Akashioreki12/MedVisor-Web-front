import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PatientService } from '../../patient.service';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/translation/language.service';

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
  selectedPerson: Patient| null = null;
  searchDate: string = "";
  selectedSurvey:any;
  surveys : any[]=[];
   // Assuming you have a list of surveys
    currentPage: number = 1;
    pageSize: number = 10; 
    options: string[] = ["ar", "fr", "en"];
  selectedLanguage: string = this.getContent('language');
direction :'ltr' | 'rtl' ='ltr';

  constructor(private router: Router, private patientService: PatientService, private http: HttpClient, private languageService: LanguageService) {}

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
        console.log(person);
        this.loadSurvey(person.cin);
        this.loadPatient(person.id);
       // this.router.navigateByUrl("/form2");
    }
}
/** 
selecteditPerson(personid:string): void {
  
  this.patientService.getPatientByCIN(personid).subscribe(
    (data: any) => { 
      console.log(this.selectedPerson);
             this.router.navigate(['/ai'], { queryParams: { selectedPerson: JSON.stringify(data) } });

    },
    error => {
        console.log('Error fetching patient:', error);
    }
  );*/
  selecteditPerson(personid: any): void {
      this.router.navigate(['/ai'], { queryParams: { selectedPerson: JSON.stringify(personid) } });


    


}

getContent(key: string): string {
  return this.languageService.getContent(key);
}
getCurrentLanguage(): string {
  return this.languageService.getCurrentLanguage();
}

toggleLanguage(language:string): void {
  this.languageService.toggleLanguage(language);
}

activateArabic(): void {
  this.toggleLanguage('ar');
  this.direction = 'rtl';
  console.log(this.getContent('back'));
}
activateFrench(): void {
  this.direction ='ltr';
  this.toggleLanguage('fr');
}
activateEnglish(): void {
  this.direction ='ltr';
  this.toggleLanguage('en');
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



loadSurvey(cin : string): void {
  this.patientService.getAllByCin(cin).subscribe(
    data => {
      this.selectedSurvey = data;
      this.surveys=data;
    },
    error => {
      console.log('Error fetching survey:', error);
    }
  );
}

loadPatient(id:number): void {
  this.patientService.getPatientById(id).subscribe(
    data => {
      this.selectedSurvey = data;
      this.surveys=data;
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

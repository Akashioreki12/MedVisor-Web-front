import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  imports:[CommonModule, FormsModule],
  providers:[HttpClient]

})
export class PatientComponent implements OnInit {
  people: Patient[] = [];
  searchQuery: string = ""; 
  searchResults: Patient[] = []; 

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

  navigate(): void {
    this.router.navigateByUrl("/page-result");
  }

  searchPatients(): void {
    if (this.searchQuery.trim() !== '') {
      this.patientService.searchPatients(this.searchQuery).subscribe(
        data => {
          this.people = data; // Update people with filtered data
        },
        error => {
          console.log('Error searching patients:', error);
        }
      );
    } else {
      // If search query is empty, reload all patients
      this.loadPatients();
    }
  }
  
}

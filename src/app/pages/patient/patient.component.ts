import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-patient',
  standalone: true,
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  imports:[CommonModule]
})
export class PatientComponent {
  public people: any[] = [];

  constructor() {
    // Example data
    const person1 = {
      name: 'John',
      firstName: 'Doe',
      cin: '123456789',
      birthday: '1990-01-01',
      number: '123-456-7890'
    };

    // Add the example person to the data array
    this.addPerson(person1);
  }

  addPerson(person: any) {
    this.people.push(person);
  }
}

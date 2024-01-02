import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormDataService } from '../../form-data.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-basic-information',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.css'
})
export class BasicInformationComponent {
  basicInformation: any = {};
  checkoutForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    age: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    countryCode: ['+212', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    maritalStatus: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    cin: ['', [Validators.required]],
  }); 
  constructor(private formDataService: FormDataService, private formBuilder: FormBuilder) { }
  onNext() {
    return this.checkoutForm.value;
  }
}

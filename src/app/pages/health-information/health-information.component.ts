import { Component } from '@angular/core';
import { FormDataService} from '../../form-data.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-health-information',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './health-information.component.html',
  styleUrl: './health-information.component.css'
})
export class HealthInformationComponent {

  checkoutForm: FormGroup = this.formBuilder.group({
    // ... existing basic information fields
    weight: ['', [Validators.required]],
    height: ['', [Validators.required]],
    bmi: ['', [Validators.required]],
    totalCholesterol: ['', [Validators.required]],
    ldlCholesterol: ['', [Validators.required]],
    hdlCholesterol: ['', [Validators.required]],
    glucoseLevel: ['', [Validators.required]],
    heartDisease: ['', [Validators.required]],
    diabetes: ['', [Validators.required]],
    hypertension: ['', [Validators.required]],
  });

  constructor(private formDataService: FormDataService, private formBuilder: FormBuilder) { }
  
  onNext(): void {
    return this.checkoutForm.value;
  }


}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormDataService } from '../../form-data.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-additional-information',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './additional-information.component.html',
  styleUrl: './additional-information.component.css'
})
export class AdditionalInformationComponent {

   checkoutForm: FormGroup = this.formBuilder.group({
    historyOfTIAs: ['', [Validators.required]],
    heredityOrGenetics: ['', [Validators.required]],
    residentialArea: ['', [Validators.required]],
    smokingStatus: ['', [Validators.required]],
    alcoholStatus: ['', [Validators.required]],
    workType: ['', [Validators.required]],
  });

  constructor(private formDataService: FormDataService, private formBuilder: FormBuilder) { }
  

 onNext(): void {
    return this.checkoutForm.value;
  }

}

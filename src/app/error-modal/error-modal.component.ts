import { Component,Input,Output,EventEmitter } from '@angular/core';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.css'
})
export class ErrorModalComponent {

  @Input() errorMessage: string = "";

  constructor(private router:Router) {}


  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.closeModalEvent.emit();
  }


  tryAgain() {
    this.closeModalEvent.emit();
    this.router.navigate(['/patient']);
  }
  




}

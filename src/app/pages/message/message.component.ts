// message-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [MatDialogModule,RouterModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  message: string;

  constructor(
    public dialogRef: MatDialogRef<MessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.message = data.message || 'Choisissez votre patient:';
  }

  onExistingPatientClick(): void {
    this.dialogRef.close('existing');
  }

  onNewPatientClick(): void {
    this.dialogRef.close('new');
  }
}

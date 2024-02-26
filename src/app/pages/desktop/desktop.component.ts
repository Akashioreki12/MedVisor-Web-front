import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from '../message/message.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [CommonModule,MatDialogModule],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.css'
})
export class DesktopComponent implements OnInit {
  currentDate!: Date;

  ngOnInit() {
    this.currentDate = new Date();
  }
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MessageComponent, {
      width: '250px',
      data: { message: 'Choisissez votre patient:' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
      // Handle the result as needed
      if (result === 'existing') {
        // Handle existing patient
      } else if (result === 'new') {
        // Handle new patient
      }
    });
  }
}

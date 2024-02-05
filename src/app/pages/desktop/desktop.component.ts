import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.css'
})
export class DesktopComponent implements OnInit {
  currentDate!: Date;

  ngOnInit() {
    this.currentDate = new Date();
  }
}

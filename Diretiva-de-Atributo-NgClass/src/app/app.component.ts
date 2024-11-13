import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isGreen: boolean = true;

  setToGreen() {
    this.isGreen = true;
  }

  setToOrange() {
    this.isGreen = false;
  }
}

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
  fontSize: number = 15;
  textColor: 'blue' | 'orange' = 'blue';
  buttonText: 'Azul' | 'Laranja' = 'Laranja';
  stylesString: string = 'font-size: 15px;';
  stylesObj: { [key: string]: string } = {
    'font-size': this.fontSize + 'px',
    color: this.textColor,
  };

  increaseFontSize() {
    this.fontSize += 5;

    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor};`;

    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      color: this.textColor,
    };
  }

  toogleFontColor() {
    if (this.textColor === 'blue') {
      this.textColor = 'orange';
      this.buttonText = 'Azul';
    } else {
      this.textColor = 'blue';
      this.buttonText = 'Laranja';
    }

    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor};`;

    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      color: this.textColor,
    };
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  pessoa = {
    name: 'Gilson',
    status: 1,
  };

  pessoa2 = {
    name: 'Arly',
    status: 2,
  };

  pessoa3 = {
    name: 'Flavio',
    status: 3,
  };
}

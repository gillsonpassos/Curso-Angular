import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  personSelectedIndex: number | undefined;
  listPeople = [
    { name: 'Felipe Freitas', age: 26 },
    { name: 'Fulano da Silva', age: 34 },
    { name: 'Jorginho Carvalho', age: 55 },
    { name: 'Joãozinho da Silva', age: 18 },
  ];
  selectPerson(index: number) {
    console.log(index);
    this.personSelectedIndex = index;
  }
}

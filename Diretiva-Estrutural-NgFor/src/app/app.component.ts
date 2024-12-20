import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { PersonComponent } from './person/person.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, PersonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

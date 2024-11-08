// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Propriedades do componente
  title = 'Meu Primeiro Aplicativo Angular';
  message = 'Bem-vindo ao Angular!';

  // Método para alterar a mensagem
  changeMessage() {
    this.message = 'Você clicou no botão!';
  }
}

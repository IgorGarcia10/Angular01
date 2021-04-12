import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*

  title = 'aula52';

  idade = 20
  lancarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }

  
  alterarNome(nome) {
    console.log(nome);
    this.nome = nome;
  
  nome;
  alterarNome(nomeInput) {
    console.log(nomeInput);
    console.log("Adicionando...");
  }

  adicionar() {
    console.log("Adicionando...");
  }

  
}
nome;
  esconderCaixa = true;
  adicionar(nomeInput) {
    console.log(nomeInput.value);
    this.nome = nomeInput.value;
    this.esconderCaixa = nomeInput.value.length <= 0;
  }


*/

  numero: number;
  escolher() {
    this.numero = Math.floor(Math.random() * 100) + 1;
  }



}

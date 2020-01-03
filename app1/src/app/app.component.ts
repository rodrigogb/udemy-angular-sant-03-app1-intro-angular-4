import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true;
  public tipoEncerramento: string;
  
  public encerrarJogo(tipo: string): void {
    console.log(tipo);
    this.tipoEncerramento = tipo;
    this.jogoEmAndamento = false;
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true;
    this.tipoEncerramento = undefined;
  }

}

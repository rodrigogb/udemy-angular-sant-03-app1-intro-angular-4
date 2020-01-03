import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string = './assets/coracao_vazio.png';
  public coracaoCheio: string = './assets/coracao_cheio.png';

  @Input() public tentativas: number;

  public coracoes: Array<Coracao> = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]
  
  constructor() { }

  // onChanges é chamado toda vez que uma variável de fora (input) é alterada
  ngOnChanges() {
    if(this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
    console.log('tentativas recebidas do painel: ', this.tentativas);
  }

  ngOnInit() {

  }

 



}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  // Input() define que a variável progresso pode receber parametros externos
  // (vindo de outro componente)
  @Input() public progresso: number = 0;


  constructor() { }

  ngOnInit() {
  }

}

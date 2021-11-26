import { TransferenciaService } from './../transferencia.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Transferencia } from '../transferencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() onSubmitTransferencia = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();
  valor!: number;
  contaDestino:string = '';
  constructor(private service : TransferenciaService, private router : Router
  ) { }



  ngOnInit(): void {

  }

  valorTransferido() {

    console.log("Solicitação de Transferencia Efetuada");
      const valorEmitir : Transferencia = { valor: this.valor, destino: this.contaDestino };
      this.service.adicionarTransferencia(valorEmitir).subscribe(resultado => {
        console.log(resultado);
        this.router.navigateByUrl('extrato');
      },error => {
        console.log(error);
      });

  }

 /*  private  isValid() {
    const valido = this.valor > 0;
    if (!valido) {
        this.valoresComErro.emit('Informe um valor válido');
    }
    return valido; */
}



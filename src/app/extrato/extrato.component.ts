import { TransferenciaService } from './../transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../transferencia';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[] = [];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.retornaTodasTransferencias().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    })
  }

}



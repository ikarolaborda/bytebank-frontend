import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from './transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencias: any[];
  private url = 'http://bytebank-api/api/transferencias';

  constructor(private cliente: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  retornaTodasTransferencias() : Observable<Transferencia[]> {
    return this.cliente.get<Transferencia[]>(this.url);
  }

  adicionarTransferencia(transferencia: Transferencia) : Observable<Transferencia> {
    this.adicionarDataTransferencia(transferencia);
    return this.cliente.post<Transferencia>(this.url, transferencia);
  }

  adicionarDataTransferencia(transferencia: any) {
    transferencia.data = new Date().toLocaleDateString();
  }
}

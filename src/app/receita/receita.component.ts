import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receita, Filtro } from '../entidade/interfaces';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  receitas: Receita[];
  receita: Receita;
  receitasTodas: Receita[];
  tipos: String[];
  filtro: Filtro;
  
  constructor(public http: HttpClient, private modalService: NgbModal) { }

  pesquisar() {
    this.receitas = [];
    let semFiltroTipo = this.filtro.tipo == "Todos";
    for (var receita of this.receitasTodas) {
      let tipoValido = semFiltroTipo || (receita.tipo == this.filtro.tipo);
      let nomeValido = true;
      if (this.filtro.nome) {
        let nome = this.filtro.nome.toUpperCase();
        nomeValido = receita.nome.toUpperCase().includes(nome);
      }
      let modoPreparoValido = true;
      if (this.filtro.modoPreparo) {
        let modoPreparo = this.filtro.modoPreparo.toUpperCase();
        modoPreparoValido = receita.modoPreparo.toUpperCase().includes(modoPreparo);
      }
      if (tipoValido && nomeValido && modoPreparoValido) {
        this.receitas.push(receita);
      }
    }
  }
  verReceita(content, receita) {
    this.receita = receita;
    this.modalService.open(content, {size: 'lg', windowClass: 'custom-class'});
  }

  ngOnInit(): void {
    this.tipos = ["Bolo", "Cheesecake", "Salgado", "Salada", "Sopa"];
    this.filtro = new Filtro();
    this.http.get<Receita[]>('assets/dados.json').subscribe(response => {
      this.receitas = response;
      this.receitasTodas = response;
    });
  }

}

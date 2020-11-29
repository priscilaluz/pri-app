import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Frances, Idioma } from '../entidade/interfaces';

@Component({
  selector: 'app-idioma-frances',
  templateUrl: './idioma-frances.component.html',
  styleUrls: ['./idioma-frances.component.css']
})
export class IdiomaFrancesComponent implements OnInit {
  cardResposta: boolean;
  showTeste: boolean;
  sentencas: Frances[];
  testesIdioma: Idioma[] = [];
  sentencaIdioma: Idioma = null;
  posicaoTeste: number = 0;
  totalTeste: number = 0;
  constructor(public http: HttpClient, private modalService: NgbModal) { 
    this.cardResposta = false;
    this.showTeste = false;
  }
  

  ngOnInit() {
    this.http.get<Frances[]>('assets/dados-frances.json').subscribe(response => {
      this.sentencas = response;
    });
  }
  virar() {
    this.cardResposta = !this.cardResposta;
  }

  teste(mostrarFrances: boolean) {
    this.testesIdioma = [];
    for (let i = 0; i < this.sentencas.length; i++) {
      let perguntaTitulo = mostrarFrances?this.sentencas[i].frances:this.sentencas[i].portugues;
      let perguntaDescricao = mostrarFrances?this.sentencas[i].pronunciaFrances:this.sentencas[i].ingles;
      let respostaTitulo = mostrarFrances?this.sentencas[i].portugues:this.sentencas[i].frances;
      let respostaDescricao = mostrarFrances?this.sentencas[i].ingles:this.sentencas[i].pronunciaFrances;

      this.testesIdioma.push({perguntaTitulo: perguntaTitulo,
         perguntaDescricao: perguntaDescricao,
        respostaTitulo: respostaTitulo,
        respostaDescricao: respostaDescricao})
    }
    this.totalTeste = this.testesIdioma.length;
    this.sentencaIdioma = this.totalTeste > 0 ? this.testesIdioma[0] : null;
    this.showTeste = true;
  }
  trocarCard(somarNum: number) {
    let pos = this.posicaoTeste+somarNum;
    if (pos >= 0 && pos < this.totalTeste) {
      this.posicaoTeste = pos;
      this.sentencaIdioma = this.testesIdioma[pos];
    }
  }
  voltar() {
    this.showTeste = false;
  }

}

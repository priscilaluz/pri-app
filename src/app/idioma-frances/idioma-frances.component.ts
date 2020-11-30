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
  cardResposta: boolean = false;
  showTeste: boolean = false;
  showTodasPalavras: boolean = false;
  showTodasPalavrasFrances: boolean = false;
  sentencas: Frances[];
  testesIdioma: Idioma[] = [];
  sentencaIdioma: Idioma = null;
  posicaoTeste: number = 0;
  totalTeste: number = 0;
  constructor(public http: HttpClient, private modalService: NgbModal) { 
  }
  

  ngOnInit() {
    this.http.get<Frances[]>('assets/dados-frances.json').subscribe(response => {
      this.sentencas = this.shuffleArray(response);
    });
  }
  todasPalavras(mostrar: boolean, frances: boolean) {
    this.showTodasPalavras = mostrar;
    this.showTodasPalavrasFrances = frances;
    for (let i = 0; i < this.sentencas.length; i++) {
      this.sentencas[i].mostrarPortugues = !frances;
      this.sentencas[i].mostrarFrances = frances;
    }
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
    this.showTodasPalavras = false;
    this.showTodasPalavrasFrances = false;
  }
  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


}

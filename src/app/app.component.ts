import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url: String;
  title = 'pri-app';
  pagina = "Meu Espaço";

  ngOnInit() {
    this.url = window.location.href;
    if (this.url.indexOf("receita") > 0) {
      this.pagina = "Receita";
    }
    if (this.url.indexOf("construindo") > 0) {
      this.pagina = "Em Construção Infinita";
    }
    if (this.url.indexOf("estudo") > 0) {
      this.pagina = "Estudo";
    }
  }
}

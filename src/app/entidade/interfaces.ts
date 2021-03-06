export class Receita {
    nome: string;
    tipo: string;
    modoPreparo: string;
    ingredientes: Ingrediente[] = [];

    constructor() {
        this.nome = null;
        this.modoPreparo = null;
    }
};
export class Ingrediente {
    id: number;
    nome: string;
    quantidade: string;

    constructor() {
        this.id = null;
        this.nome = null;
        this.quantidade = null;
    }
}
export class Filtro {
    nome: string;
    modoPreparo: string;
    tipo: string;
    constructor() {
        this.nome = null;
        this.modoPreparo = null;
        this.tipo = "Todos";
    }
}
export class Frances {
    portugues: string;
    ingles: string;
    frances: string;
    pronunciaFrances: string;
    mostrarFrances: boolean;
    mostrarPortugues: boolean;

    constructor() {
        this.portugues = null;
        this.ingles = null;
        this.frances = null;
        this.pronunciaFrances = null;
        this.mostrarFrances = false;
        this.mostrarPortugues = false;
    }
};
export class Idioma {
    perguntaTitulo: string;
    perguntaDescricao: string;
    respostaTitulo: string;
    respostaDescricao: string;
    

    constructor() {
        this.perguntaTitulo = null;
        this.perguntaDescricao = null;
        this.respostaTitulo = null;
        this.respostaDescricao = null;
        
    }
};
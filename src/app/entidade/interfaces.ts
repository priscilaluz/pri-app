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

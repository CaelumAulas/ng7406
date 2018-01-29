import { Component, OnInit, OnDestroy } from '@angular/core';
import { FotoService } from "../servicos/foto.service";
import { FotoComponent } from '../foto/foto.component';

@Component({
    selector: 'cp-listagem',
    templateUrl: './listagem.component.html',
    styles: []
})
export class ListagemComponent implements OnInit, OnDestroy {
    titulo = 'CaelumPic'
    listaFotos: FotoComponent[] = []

    constructor(private servico: FotoService) {

        servico.listar()
                .subscribe(
                    fotosApi => this.listaFotos = fotosApi
                    , erro => console.log(erro)
                )
    }
    
    ngOnInit() {
    }

    ngOnDestroy(){
        
    }

    remover(foto: FotoComponent){
        
        this.servico.deletar(foto)
                    .subscribe(
                        () => {                            
                            
            this.listaFotos = this.listaFotos.filter(fotoFilter  => fotoFilter != foto )
                        
                            console.log(`apagouuuuu ${foto.titulo}`)
                        }
                        ,
                        erro => {
                            console.log(`opps algo errado aconteceu`)
                        }
                    )
    }
}
import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'cp-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

    foto = new FotoComponent()
    mensagem = ''

    constructor(private servico: FotoService,
                private rota: ActivatedRoute,
                private roteador: Router) {

            rota.params.subscribe(
                parametros => {

                    if(parametros.fotoId){
                        this.carregarFoto(parametros.fotoId)
                    }

                }
            )
    }

    ngOnInit() {}

    carregarFoto(idFoto){
        this.servico.consultar(idFoto)
                    .subscribe(
                        fotoApi => this.foto = fotoApi
                        , erro => console.log(erro)
                    )
    }

    salvar(){
        if(this.foto._id){
            this.servico.alterar(this.foto)
                        .subscribe(
                            mensagemServico => {
                                this.mensagem = mensagemServico.texto
                                this.roteador.navigate([''])
                            }
                            , erro => console.log(erro)
                        )
        }
        else {
            this.servico
                .cadastrar(this.foto)
                .subscribe(
                    mensagemServico => {

                        this.mensagem = mensagemServico.texto
                        
                        this.foto = new FotoComponent()
                    }
                    , erro => console.log(erro)
                ) 
        }
    }
}
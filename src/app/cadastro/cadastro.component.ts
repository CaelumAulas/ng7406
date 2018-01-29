import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'cp-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

    foto = new FotoComponent()
    mensagem = ''
    formCadastro: FormGroup

    constructor(private servico: FotoService,
                private rota: ActivatedRoute,
                private roteador: Router,
                private formBuilder: FormBuilder) {

            
            this.validacaoForm()
           
            rota.params.subscribe(
                parametros => {

                    if(parametros.fotoId){
                        this.carregarFoto(parametros.fotoId)
                    }

                }
            )
    }

    ngOnInit() {}

    validacaoForm(){

        this.formCadastro = this.formBuilder.group({
            titulo: ['', [
                Validators.required,
                Validators.minLength(3)
            ]
            ],
            url: ['', Validators.required],
            descricao: ''
        })

    }

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
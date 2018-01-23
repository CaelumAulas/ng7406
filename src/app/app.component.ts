import { Component } from '@angular/core'
import { Http } from "@angular/http";

@Component({
selector: 'app-root',
templateUrl: './app.component.html' 
})
export class AppComponent {
    titulo = 'CaelumPic'
    listaFotos = []

    constructor(ajax: Http){
        ajax.get('http://localhost:3000/v1/fotos')
            .subscribe(
                resposta => {
                    this.listaFotos = resposta.json()
                }
            )
    }
}
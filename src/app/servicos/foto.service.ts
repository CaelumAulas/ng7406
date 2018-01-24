import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
//import { map } from 'rxjs/operator'

import 'rxjs/add/operator/map'
import { FotoComponent } from "../foto/foto.component";
import { Injectable } from "@angular/core";

@Injectable()
export class FotoService {

    private url = 'http://localhost:3000/v1/fotos/'

    private opcoesHttp = { headers: new HttpHeaders({'Content-Type':'application/json'})}
    
    constructor(private conexaoApi: HttpClient){}

    listar() {
        return this.conexaoApi.get<FotoComponent[]>(this.url)
    }

    cadastrar(foto: FotoComponent): Observable<Object> {

        return this.conexaoApi
                    .post(
                        this.url
                        ,JSON.stringify(foto)
                        ,this.opcoesHttp
                        )

    }
    
    deletar(foto: FotoComponent){
        return this.conexaoApi.delete(this.url+foto._id)
    }

    consultar(){}

    alterar(){}
}
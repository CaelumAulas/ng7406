import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

import { FotoComponent } from "../foto/foto.component";

@Injectable()
export class FotoService {

    private url = 'http://localhost:3000/v1/fotos/'

    private opcoesHttp = { headers: new HttpHeaders({'Content-Type':'application/json'})}
    
    constructor(private conexaoApi: HttpClient){}

    listar(): Observable<FotoComponent[]> {
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
    
    deletar(foto: FotoComponent): Observable<Object> {
        return this.conexaoApi.delete(this.url+foto._id)
    }

    consultar(fotoId: string): Observable<FotoComponent> {
        return this.conexaoApi.get<FotoComponent>(this.url+fotoId)
    }

    alterar(){}
}
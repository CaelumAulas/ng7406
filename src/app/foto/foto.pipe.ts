import { Pipe, PipeTransform } from "@angular/core";
import { FotoComponent } from "./foto.component";

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform{
    
    transform(listaFotos: FotoComponent[], textoDigitado: string){

    return  listaFotos
                .filter(
                    foto => foto.titulo.toLowerCase().includes(textoDigitado.toLowerCase())                    
                )
    }
}
import { Component, Input } from "@angular/core"

@Component({
    selector: 'foto',
    template: `<img [alt]="titulo" src="{{url}}" class="img-fluid" alt="">` 
}) 
export class FotoComponent {
    @Input() titulo:string = ""
    @Input() url = ""
             descricao = ""
             _id: string
}
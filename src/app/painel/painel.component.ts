import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'painel',
    templateUrl: './painel.component.html',
    styles: [`
        .card-body {
            background: red;
        }
    `]
})
export class PainelComponent implements OnInit {
    @Input() titulo: string

    constructor(){
        
    }
    
    ngOnInit(){
        this.titulo =  this.titulo.toUpperCase()
    }
}
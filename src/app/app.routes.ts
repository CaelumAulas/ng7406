import { Routes, RouterModule } from "@angular/router";
import { ListagemComponent } from "./listagem/listagem.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

const rotasApp:Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent, data: {titulo: `cadastro de fotos` } },
    {path: 'cadastro/:fotoId', component: CadastroComponent },
    {path: '**', redirectTo: ''}
]

export const roteamento = RouterModule.forRoot(rotasApp)
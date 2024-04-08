import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from 'src/app/inicio/inicio.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RestritoComponent } from 'src/app/restrito/restrito.component';
const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'restrito', component: RestritoComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
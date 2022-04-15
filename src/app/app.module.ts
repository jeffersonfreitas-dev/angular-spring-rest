import { Interceptor } from './service/header-interceptor.service';
import { GuardiaoGuard } from './service/guardiao.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component' //Modulo para realizar requisiçoes Ajax
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { UsuarioComponent } from './component/usuario/usuario/usuario.component';
import { UsuarioAddComponent } from './component/usuario/usuario-add/usuario-add.component';

export const appRouters: Routes = [
  {path:'', component: LoginComponent},
  {path:'home', component: HomeComponent, canActivate: [GuardiaoGuard]},
  {path:'login', component: LoginComponent},
  {path:'usuario-list', component: UsuarioComponent, canActivate: [GuardiaoGuard]},
  {path:'usuarioAdd', component: UsuarioAddComponent, canActivate: [GuardiaoGuard]},
  {path:'usuarioAdd/:uuid', component: UsuarioAddComponent, canActivate: [GuardiaoGuard]}
]

export const routes : ModuleWithProviders<any> = RouterModule.forRoot(appRouters);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    UsuarioComponent,
    UsuarioAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routes,
    Interceptor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

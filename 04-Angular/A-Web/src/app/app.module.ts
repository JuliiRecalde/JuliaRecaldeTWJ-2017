import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EstiloComponent } from './estilo/estilo.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PaginaComponent } from './Componentes/pagina/pagina.component';
import { PlanetasComponent } from './Componentes/planetas/planetas.component';
import { BootsComponent } from './Componentes/boots/boots.component';
import { PlanetaStarWarsComponent } from './Componentes/planeta-star-wars/planeta-star-wars.component';
import { DiametroPSWComponent } from './Componentes/diametro-psw/diametro-psw.component';
import { ClimaPSWComponent } from './Componentes/clima-psw/clima-psw.component';
import { GravedadPSWComponent } from './Componentes/gravedad-psw/gravedad-psw.component';
import { TerrenoPSWComponent } from './Componentes/terreno-psw/terreno-psw.component';
import { PoblacionPSWComponent } from './Componentes/poblacion-psw/poblacion-psw.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { Pagina2Component } from './Componentes/pagina2/pagina2.component';
import {ModuloDeRutas} from "./routes";
import { Pagina21Component } from './Componentes/pagina21/pagina21.component';
import { Pagina22Component } from './Componentes/pagina22/pagina22.component';
import { Pagina23Component } from './Componentes/pagina23/pagina23.component';



@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent,
    PaginaComponent,
    PlanetasComponent,
    BootsComponent,
    PlanetaStarWarsComponent,
    DiametroPSWComponent,
    ClimaPSWComponent,
    GravedadPSWComponent,
    TerrenoPSWComponent,
    PoblacionPSWComponent,
    UsuarioComponent,
    Pagina2Component,
    Pagina21Component,
    Pagina22Component,
    Pagina23Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuloDeRutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

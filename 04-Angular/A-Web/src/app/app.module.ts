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



@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent,
    PaginaComponent,
    PlanetasComponent,
    BootsComponent,
    PlanetaStarWarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [InicioComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario:UsuarioInt ={
    nombre: "Julia",
    apellido: "Recalde"
  }

  url:string="https://angular.io/";

  constructor(){
    console.log("constructor");
    this.holaMundo();
    console.log(
      this.saludar(this.usuario.nombre,
        this.usuario.apellido
      ));
  }
  //funciones (publica y void)
  holaMundo(){
    console.log("Hola mundo");
  }
  saludar(nombre:string,
          apellido?:string):string{
    return `Hola ${nombre} ${apellido}`;
  }
}

interface UsuarioInt {
  nombre:string,apellido:string
}

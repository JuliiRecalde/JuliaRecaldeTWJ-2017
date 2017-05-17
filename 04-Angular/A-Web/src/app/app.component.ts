import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hola mundo</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario:UsuarioInt ={
    nombre: "Julia",
    apellido: "Recalde"
  }
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

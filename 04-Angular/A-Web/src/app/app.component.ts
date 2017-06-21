import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarioLocal:UsuarioInt ={
    nombre: "",
    apellido: "Recalde"

  };
  parrafo:string = "";
  //background:string="blue";

  url:string="https://angular.io/";
  src:string="https://g00glen00b.be/wp-content/uploads/2016/11/angular.png";


  constructor(){
    /*console.log("constructor");
    this.holaMundo();
    console.log(
      this.saludar(this.usuarioLocal.nombre,
        this.usuarioLocal.apellido
      ));*/


    this.usuarioLocal.nombre = "Patricia";
    this.parrafo = "Mi mama me mima";

    setTimeout(()=>{
      this.usuarioLocal.nombre = "Julia"

    },3000);
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

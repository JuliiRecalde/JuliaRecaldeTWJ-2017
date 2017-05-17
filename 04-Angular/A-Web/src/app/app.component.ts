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
  
}

interface UsuarioInt {
  nombre:string,apellido:String
}



import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {PlanetasStarWars} from "../../Interfaces/PlanetaStarWars";
import {UsuarioClass} from "../../Clases/UsuarioClass";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Julia";

  usuarios: UsuarioClass[] = [];

  nuevoUsuario: UsuarioClass = new UsuarioClass("");

  planetas: PlanetasStarWars[] = [];
  //planetas2:Array<PlanetasStarWars>=[];

  arregloUsuarios = [
    {
      nombre: "Adrian",
      apellido: "Eguez",
      conectado: true
    }, {
      nombre: "Mashi",
      apellido: "Correa",
      conectado: true
    }, {
      nombre: "Abdala",
      apellido: "Bucaram",
      conectado: false
    }, {
      nombre: "Juan Jose",
      apellido: "Flores",
      conectado: true
    }]


  constructor(private _http: Http) {
    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO!!!!
  }

  ngOnInit() {
    //Esta listo el componente

    this._http
      .get("http://localhost:1337/Usuario/")
      .subscribe(
        respuesta => {
          let rjson: UsuarioClass[] = respuesta.json();


          this.usuarios = rjson.map(
            (usuario:UsuarioClass)=>{
              usuario.editar=false;
              return usuario;
            }
          );

          console.log("Usuarios: ", this.usuarios);
        },
        error => {
          console.log("Error: ", error)

        }
      )
  }

  cambiarNombre(): void {
    console.log("Entro");
    this.nombre = "Rafico a Lenin";
  }

  cambiarOtroNombre() {
    this.nombre = "Lenin a Rafico";
  }

  cambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);
    this.nombre = nombreEtiqueta.value;
  }

  cargarPlanetas() {
    this._http
      .get("http://swapi.co/api/planets")
      // .map(response=>response.json())
      .subscribe(
        (response) => {
          console.log("Response:", response);
          console.log(response.json());
          let respuesta = response.json();
          console.log(respuesta.next);
          this.planetas = respuesta.results;

          this.planetas = this.planetas.map(
            (planeta) => {
              planeta.imagenURL = "/assets/imagenes" + planeta.name + '.jpg';
              return planeta;
            }
          )
        },
        (error) => {
          console.log("Response:", error);
        },
        () => {
          console.log("finally");
        }
      )
  }

  crearUsuario(){
    console.log("Entro a crear Usuario");
    /*
     let usuario = {
     nombre:this.nuevoUsuario.nombre
     };
     */

    this._http
      .post("http://localhost:1337/Usuario",this.nuevoUsuario)
      .subscribe(
        respuesta=>{
          let respuestaJson = respuesta.json()
          this.usuarios.push(respuestaJson);
          this.nuevoUsuario = new UsuarioClass();
          console.log('respuestaJson: ',respuestaJson);
        },
        error=>{
          console.log("Error",error);
        }
      )

  }

  eliminarUsuario(usuario:UsuarioClass){

    let indice = this.usuarios.indexOf(usuario);

    this.usuarios.splice(indice,1);

  }


}

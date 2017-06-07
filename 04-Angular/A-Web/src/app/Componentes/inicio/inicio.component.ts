import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {PlanetasStarWars} from "../../Interfaces/PlanetaStarWars";
import {UsuarioClass} from "../../Clases/UsuarioClase";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario:UsuarioClass[]=[];

  nuevoUsuario:UsuarioClass= new UsuarioClass();

  planetas: PlanetasStarWars[]=[];
  //planetas2:Array<PlanetasStarWars>=[];



  constructor(private _http: Http) {
  }

  ngOnInit() {
    this._http.get("http://localhost:1337/Usuario")
      .subscribe(
        respuesta=>{
          let rjson:UsuarioClass[] = respuesta.json();
          this.usuario=rjson;
          console.log("Usuarios ", this.usuario);
        },
        error=>{
          console.log("Error ", error)
        }
      )
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

          this.planetas=this.planetas.map(
            (planeta)=>{
              planeta.imagenURL="/assets/imagenes"+planeta.name+'.jpg';
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
    console.log("Entro a crear usuario");
    /*
    let usuario:UsuarioClass={
      nombre:this.nuevoUsuario.nombre
    }
    */
    this._http.post("http://localhost:1337/Usuario", this.usuario)
      .subscribe(
        respuesta=>{
          let respuestaJson =respuesta.json();
          console.log("respuestaJson: ", respuestaJson)
        },
        error=>{
          console.log("error", error)
        }
      )
  }


}




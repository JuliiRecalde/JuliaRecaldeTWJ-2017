import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {
  planetas: PlanetasStarWars[]=[];
  //planetas2:Array<PlanetasStarWars>=[];

  constructor(private _http: Http) {
  }

  ngOnInit() {
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


}


interface PlanetasStarWars {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
  imagenURL?: string


}

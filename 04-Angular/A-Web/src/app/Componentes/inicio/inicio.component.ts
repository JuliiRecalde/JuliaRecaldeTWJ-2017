import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre:string ="Julia";

  constructor() { }

  ngOnInit() {
  }
  cambiarNombre():void {
    console.log("Entro");
    this.nombre = "Rafico a lenin";
  }
    cambiarOtroNombre(){
    this.nombre ="Lenin a Rafico";
    }



}

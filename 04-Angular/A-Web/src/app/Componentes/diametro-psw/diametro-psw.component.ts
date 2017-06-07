import {Component, Input, OnInit} from '@angular/core';
import {PlanetasStarWars} from "../../Interfaces/PlanetaStarWars";

@Component({
  selector: 'app-diametro-psw',
  templateUrl: './diametro-psw.component.html',
  styleUrls: ['./diametro-psw.component.css']
})
export class DiametroPSWComponent implements OnInit {
  @Input() planeta:PlanetasStarWars;

  constructor() { }

  ngOnInit() {
    console.log('El valor del planeta es:', this.planeta)
  }

}

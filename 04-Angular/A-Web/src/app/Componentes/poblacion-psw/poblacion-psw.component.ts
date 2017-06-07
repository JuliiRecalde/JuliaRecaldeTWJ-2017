import {Component, Input, OnInit} from '@angular/core';
import {PlanetasStarWars} from "../../Interfaces/PlanetaStarWars";

@Component({
  selector: 'app-poblacion-psw',
  templateUrl: './poblacion-psw.component.html',
  styleUrls: ['./poblacion-psw.component.css']
})
export class PoblacionPSWComponent implements OnInit {

  @Input() planeta:PlanetasStarWars
  constructor() { }

  ngOnInit() {
  }

}

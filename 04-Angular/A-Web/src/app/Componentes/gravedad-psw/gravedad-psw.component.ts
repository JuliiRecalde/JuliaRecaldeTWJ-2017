import {Component, Input, OnInit} from '@angular/core';
import {PlanetasStarWars} from "../../Interfaces/PlanetaStarWars";

@Component({
  selector: 'app-gravedad-psw',
  templateUrl: './gravedad-psw.component.html',
  styleUrls: ['./gravedad-psw.component.css']
})
export class GravedadPSWComponent implements OnInit {

  @Input() planeta:PlanetasStarWars;

  constructor() { }

  ngOnInit() {
  }

}

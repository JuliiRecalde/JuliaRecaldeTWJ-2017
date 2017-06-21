import {Component, Input, OnInit} from '@angular/core';
import {PlanetasStarWars} from "../../Interfaces/PlanetaStarWars";

@Component({
  selector: 'app-clima-psw',
  templateUrl: './clima-psw.component.html',
  styleUrls: ['./clima-psw.component.css']
})
export class ClimaPSWComponent implements OnInit {
  @Input() planeta:PlanetasStarWars;

  constructor() { }

  ngOnInit() {
  }

}

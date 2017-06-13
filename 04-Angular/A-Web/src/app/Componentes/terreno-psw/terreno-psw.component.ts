import {Component, Input, OnInit} from '@angular/core';
import {PlanetasStarWars} from "../../Interfaces/PlanetaStarWars";

@Component({
  selector: 'app-terreno-psw',
  templateUrl: './terreno-psw.component.html',
  styleUrls: ['./terreno-psw.component.css']
})
export class TerrenoPSWComponent implements OnInit {

  @Input() terreno:string;
  constructor() { }

  ngOnInit() {
  }

}

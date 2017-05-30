import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  src:string="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social-logo.png";

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  expression = true;
  perfil= 'admin';
  lista= [{nombre: 'matias', perfil:'1'},{nombre:'sebas', perfil:'2'}];
  constructor() { }

  ngOnInit(): void {
  }

  ocultarMostrar(){
    this.expression = !this.expression;
  }

}

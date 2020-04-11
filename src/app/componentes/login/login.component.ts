import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  Ingresar() {
    console.log(this.usuario);

    if (this.usuario.email === 'admin@mail.com' && this.usuario.pass === '12345') {
      this.route.navigate(['home']);
    }
    else {
      this.route.navigate(['*']);
    }
  }

}

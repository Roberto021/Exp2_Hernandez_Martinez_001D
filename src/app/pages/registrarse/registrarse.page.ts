import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  usuario = {
    usuario:'',
    edad:'',
    genero:'',
    email:'',
    password:''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}

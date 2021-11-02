import { Component } from '@angular/core';

interface Componente{

  icon: string;
  name: string;
  redirecTo:string;

}



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] =[

    {
      icon: 'paw-outline',
      name: 'Cuidados', 
      redirecTo: '/cuidados'
    },

    {
      icon: 'reader-outline', 
      name: 'Registrarse', 
      redirecTo: '/registrarse'
    },

    {
      icon: 'create', 
      name: 'Crud', 
      redirecTo: '/datos'
    },

    {
      icon: 'newspaper-outline', 
      name: 'Noticias', 
      redirecTo: '/noticias'
    },

  ]
}

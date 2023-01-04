import { Component } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {

  // tarea!:string;
  // descripcion!:string;
  datoTareas = [''];
  datoDescripcion = [''];

  enviarDatos(tarea:string, descripcion:string){
    this.datoTareas.push(tarea);
    this.datoTareas.push(descripcion);
    console.log(this.datoTareas)
  }
}

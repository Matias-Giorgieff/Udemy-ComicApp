import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  // heroesSeleccionado es el evento que el padre va a escuchar, y este devolvera un number(index)
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private _router: Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    this._router.navigate( ['/heroe', this.index] );
    // Cuando el padre (heroes.html) escuche ele vento llamara a la funcion verHeroe de el (heroe.ts)
    // En este caso no fue muy practico porque esto se llama de dos lugares distintos, por lo que decidimos dejarlo con el router.navegite
    // this.heroeSeleccionado.emit( this.index );
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-lista-resultados',
  templateUrl: './lista-resultados.component.html'
})
export class ListaResultadosComponent implements OnInit {

  heroesArr: Heroe[] = [];
  termino: string;
  constructor(private _activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
                
               }

  ngOnInit(): void {
    this.heroesArr.length = 0;
    this._activatedRoute.params.subscribe( params => {
      this.heroesArr = this._heroesService.buscarHeroes( params['termino'] );
      this.termino = params['termino'];
    } );

  }
}

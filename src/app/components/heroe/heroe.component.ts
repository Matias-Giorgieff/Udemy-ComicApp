import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { equal } from 'assert';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ],
})
export class HeroeComponent {

  heroe: any = {};
  isMarvel: boolean;
  constructor(private _activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
                this._activatedRoute.params.subscribe( params => {
                this.heroe = this._heroesService.getHeroe( params['id'] );
                if(this.heroe.casa === 'DC'){
                  this.isMarvel = false;
                }else{
                  this.isMarvel = true;
                }
              } );
  }


}

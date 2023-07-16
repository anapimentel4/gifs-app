import { Component } from '@angular/core';
import { Gifservice } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor(private gifsService: Gifservice){}

   get gifs(): Gif[]{
    return this.gifsService.gifList
   }


  }




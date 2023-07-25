import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {

  @Input()
 public gif!:Gif; // si no viene este elemento que me lance un error para eso en oninit



 ngOnInit(): void {
  if(!this.gif) throw new Error('Gif Property is required')

}


}

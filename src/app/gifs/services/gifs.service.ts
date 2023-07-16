import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class Gifservice {


  private _tagsHistory:string[]= [];
  private apiKey: string ='wqfiMDLDBSl1jXhpoAlCk7YrOyEum1nl';

  constructor() { }


  get tagsHistory(){
    return [...this._tagsHistory]
  }

private organizeHistory(tag: string ){
 tag = tag.toLowerCase();  //key sensitive

 //si el tag que se busca ya existe, quiero que se remueva de su posicion actual y se regrese al inicio y evitar que se agregue lo mismo dos veces
if (this._tagsHistory.includes(tag)){
  this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
}
this._tagsHistory.unshift(tag);
this._tagsHistory = this._tagsHistory.splice(0,10)

}


  searchTag(tag:string):void {
  //validaciones
  if(tag.length === 0) return // si le da a nter sin agregar letras no hace nada

    this.organizeHistory(tag)

  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({providedIn: 'root'})
export class Gifservice {

public gifList: Gif[]= []


  private _tagsHistory:string[]= [];
  private apiKey         : string = 'wqfiMDLDBSl1jXhpoAlCk7YrOyEum1nl';
  private serviceUrl     : string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }


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
  if(tag.length === 0) return // si le da a nter sin agregar letras no hace nada
    this.organizeHistory(tag)



const params = new HttpParams()
 .set( 'api_key', this.apiKey )
 .set( 'limit', '10')
 .set( 'q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search?`, { params })
      .subscribe(resp =>{
        this.gifList = resp.data
        console.log({gifs: this.gifList});
      })

  }
}

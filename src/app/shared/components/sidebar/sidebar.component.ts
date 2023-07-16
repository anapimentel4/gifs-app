import { Component } from '@angular/core';
import { Gifservice } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  //inyectar el servicio aqui
  constructor( private gifservice:Gifservice){

  }


  get tags(){
    return this.gifservice.tagsHistory;
  }
}

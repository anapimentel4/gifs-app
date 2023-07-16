import { Component,  ViewChild, ElementRef} from '@angular/core';
import { Gifservice } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5> Buscar:>> </h5>
  <input type="text"
  class="form-control"
  placeholder="Buscar gifs"
   (keyup.enter)="seachTag()"
  #txtTaginput
  >
 `
})

export class SearchBoxComponent {

  @ViewChild('txtTaginput')
public tagInput!:ElementRef<HTMLInputElement>;

constructor(private gifService:Gifservice){}



seachTag(){
  const newTag = this.tagInput.nativeElement.value
  this.gifService.searchTag(newTag)
  // limpiarlo despues que se escribe algo
  this.tagInput.nativeElement.value =' '
}
}

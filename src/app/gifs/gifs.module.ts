import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/listado/card-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './pages/home/home-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterComponent} from './Characters/components/character/character.component';
import {CharactersComponent} from './Characters/components/characters/characters.component';
import { ComicsComponent } from './comicpage/comics/comics.component';
import { CreatorsComponent } from './creatorspage/creators/creators.component';
import {HomepageComponent} from './homepage/homepage.component';
import {SeriesComponent} from './Series/series/series.component';

const routes: Routes = [
  {
    path:'', redirectTo: '/Home', pathMatch: 'full'
  },
  {
    path: 'characters', component: CharactersComponent
  },
  {
    path: 'Home', component:HomepageComponent
  },
  {
    path:'search/:searchTerm', component: CharactersComponent
  },
  {
    path: 'character/:id', component: CharacterComponent
  },
  {
    path: 'comics', component: ComicsComponent
  },
  {
    path: 'creators', component: CreatorsComponent
  },
  {
    path: 'series', component : SeriesComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

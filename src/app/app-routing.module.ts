import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterComponent} from './Characters/components/character/character.component';
import {CharactersComponent} from './Characters/components/characters/characters.component';
import { ComicComponent } from './comicpage/comic/comic.component';
import { ComicsComponent } from './comicpage/comics/comics.component';
import { CreatorComponent } from './creatorspage/creator/creator.component';
import { CreatorsComponent } from './creatorspage/creators/creators.component';
import {HomepageComponent} from './homepage/homepage.component';
import { SerieComponent } from './Series/serie/serie.component';
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
    path: 'comics/:id', component: ComicComponent
  },
  {
    path: 'creators', component: CreatorsComponent
  },
  {
    path: 'creators/:id', component: CreatorComponent
  },
  {
    path: 'series', component : SeriesComponent
  },
  {
    path: 'series/:id', component: SerieComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

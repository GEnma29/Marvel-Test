import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './Characters/components/characters/characters.component';
import { CharacterComponent } from './Characters/components/character/character.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { CharacterCardComponent } from './Characters/components/character-card/character-card.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FilterPipe } from './pipes/filter.pipe'
import { FormsModule } from '@angular/forms';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { DescriptionNullPipe } from './pipes/description-null.pipe';
import { ComicsComponent } from './comicpage/comics/comics.component';
import { ComicComponent } from './comicpage/comic/comic.component';
import { CreatorsComponent } from './creatorspage/creators/creators.component';
import { CreatorComponent } from './creatorspage/creator/creator.component';
import { SeriesComponent } from './Series/series/series.component';
import { SerieComponent } from './Series/serie/serie.component';
import { CardCreatorComponent } from './creatorspage/components/card-creator/card-creator.component';
import { CardSeriesComponent } from './Series/components/card-series/card-series.component';
import { DetailsPageComicComponent } from './comicpage/components/details-page-comic/details-page-comic.component';
import { DetailsPageCreatorComponent } from './creatorspage/components/details-page-creator/details-page-creator.component';
import { DetailsPageSeriesComponent } from './Series/components/details-page-series/details-page-series.component';
import { FiltroPipe } from './pipe/filtro.pipe';
import { FiltroComicsPipe } from './pipes/filtro-comics.pipe';
import { FiltroCreatorPipe } from './pipes/filtro-creator.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    CharacterCardComponent,
    HomepageComponent,
    FilterPipe,
    DetailsPageComponent,
    DescriptionNullPipe,
    ComicsComponent,
    ComicComponent,
    CreatorsComponent,
    CreatorComponent,
    SeriesComponent,
    SerieComponent,
    CardCreatorComponent,
    CardSeriesComponent,
    DetailsPageComicComponent,
    DetailsPageCreatorComponent,
    DetailsPageSeriesComponent,
    FiltroPipe,
    FiltroComicsPipe,
    FiltroCreatorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

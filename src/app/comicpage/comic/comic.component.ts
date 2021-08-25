import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ServicesComicsService } from '../services/services-comics.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  @Input() DataCard: any;
public DataComic:any;
  constructor(private activatedRoute:ActivatedRoute, private serviceComic:ServicesComicsService) {}
  public Characters:any;
  public Creators: any;
  public Series: any;

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(paramMap=>{
      const { id } = paramMap
      console.log(id);
      this.getComic(id);
      this.getCharacteronComic(id);
      this.getCreaters(id)


    })
  }
  getComic(id: string){
    const url =`https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=bd97722a0e0785aea63027c4c05bade1&hash=c5c8e6785e17a8941c28c31fe1e68ef0`

    this.serviceComic.get(url).subscribe((respuesta )=>{
      this.DataComic = respuesta.data.results[0];
      console.log(respuesta);
    })
  }
  getCharacteronComic(id:string){
    return this.Characters =this.serviceComic.getCharacters(id)
    }

  getCreaters(id: string){

    return this.Creators = this.serviceComic.getCreators(id)

  }


}

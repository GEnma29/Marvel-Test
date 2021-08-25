import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {ServicesComicsService} from '../services/services-comics.service'
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private comicsServices:ServicesComicsService ) { }
  
  filterComics=""
  public ComicData:any;

  allComics: Observable<any>;

  ngOnInit(){
    
    this.activatedRoute.params.subscribe(paramMap=>{
      const {id} = paramMap
      console.log(id)
    })

    this.getComics();
    
  }

  getComic(id:string){
    const url =`https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=bd97722a0e0785aea63027c4c05bade1&hash=c5c8e6785e17a8941c28c31fe1e68ef0`

    this.comicsServices.get(url).subscribe((respuesta )=>{
      this.ComicData = respuesta.data.results[0];
      console.log(respuesta.data.results[0])
    })
  }

  getComics(){
    this.allComics = this.comicsServices.getAllComics();
  }

}

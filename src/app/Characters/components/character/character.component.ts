import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CharactersService} from '../../services/characters.service'
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public CharacterId:string;

  public Comics: any;

  public Series: any;

  public DataCharacter:any;

  public name: string;

  constructor(private activatedRoute:ActivatedRoute, private service:CharactersService){}
  ngOnInit(){

    this.activatedRoute.params.subscribe(paramMap=>{
      const {id} = paramMap
      console.log(id)
      this.getCharacter(id)
      this.getCharacterComics(id)
      this.getCharacterSeries(id)
    })

  }
  getCharacter(id: string){
    const url =`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=bd97722a0e0785aea63027c4c05bade1&hash=c5c8e6785e17a8941c28c31fe1e68ef0`

    this.service.get(url).subscribe((respuesta )=>{
      this.DataCharacter = respuesta.data.results[0];
      console.log(respuesta.data.results[0])
    })


  }
  getCharacterComics(id: string){
   this.Comics= this.service.getComicsByCharacter(id)

  }
  getCharacterSeries(id: string){
    this.Series= this.service.getSeriesByCharacter(id)
  }


}


import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CharactersService} from '../../services/characters.service';
import { ActivatedRoute } from '@angular/router';
import  {filter } from "rxjs/operators"
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {


  constructor(private characterService: CharactersService, private route:ActivatedRoute) {}

  filterCharacters=""

  allCharacters: Observable<any>;

  ngOnInit(){
    this.getCharacters();

  }
  getCharacters(){
    this.allCharacters = this.characterService.getAllCharacters();
  }
}

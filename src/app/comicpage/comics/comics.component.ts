import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ServicesComicsService} from '../services/services-comics.service'
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comicsServices:ServicesComicsService ) { }
  
  filterComics=""

  allComics: Observable<any>;

  ngOnInit(){
    this.getComics();
    
  }
  getComics(){
    this.allComics = this.comicsServices.getAllComics();
  }

}

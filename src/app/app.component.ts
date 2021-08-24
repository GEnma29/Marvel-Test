import { Component } from '@angular/core';
import {CharactersService} from './Characters/services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marveltest';

  constructor(private serviceCharacter: CharactersService){}
  ngOnInit(): void {

  this.serviceCharacter.getAllCharacters().subscribe(res=>{
    console.log('respuesta api', res)
  });

  }
}

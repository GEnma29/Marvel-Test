import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map, filter} from 'rxjs/operators';
import {RequestCharacter} from 'src/app/models';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  private CharacterObjet: any;
  public Character: any;
  private PUBLIC_KEY="bd97722a0e0785aea63027c4c05bade1"
  private HASH='c5c8e6785e17a8941c28c31fe1e68ef0'

  public get(url:string){

    return this.http.get<RequestCharacter>(url)
  }

  public getCharacterbyId(id: string){
    const Urlapi = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=bd97722a0e0785aea63027c4c05bade1&hash=c5c8e6785e17a8941c28c31fe1e68ef0`

    return this.http.get(Urlapi)
  }

  public getAllCharacters():Observable<any>{
  const Urlapi= `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

    return this.CharacterObjet= this.http.get(Urlapi).pipe(map((data: any) => data.data.results))

  }
 public getComicsByCharacter(id:string):Observable<any>{
  const Urlapi= `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  return this.http.get(Urlapi).pipe(map((data:any)=>data.data.results))

 }
 public getSeriesByCharacter(id:string): Observable<any>{
  const Urlapi= `https://gateway.marvel.com:443/v1/public/characters/${id}/series?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  return this.http.get(Urlapi).pipe(map((data:any)=>data.data.results))

 }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ComicRquest} from '../../models'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicesComicsService {

  private filterComics=""
  private allComics:any;
  constructor(private http: HttpClient) { }

  private PUBLIC_KEY="bd97722a0e0785aea63027c4c05bade1"
  private HASH='c5c8e6785e17a8941c28c31fe1e68ef0'

  public get(url:string){

    return this.http.get<ComicRquest>(url)
  }

  public getAllComics():Observable<any>{
    const Urlapi= `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  
      return this.http.get(Urlapi).pipe(map((data: any) => data.data.results))
  
    }
  public getCharacters(id:string){
    const url =`https://gateway.marvel.com:443/v1/public/comics/${id}/characters?ts=1&apikey=bd97722a0e0785aea63027c4c05bade1&hash=c5c8e6785e17a8941c28c31fe1e68ef0`

    return this.http.get(url).pipe(map((data:any)=>data.data.results))
  }
  public getCreators(id:string){

    const url =`https://gateway.marvel.com:443/v1/public/comics/${id}/creators?ts=1&apikey=bd97722a0e0785aea63027c4c05bade1&hash=c5c8e6785e17a8941c28c31fe1e68ef0`

    return this.http.get(url).pipe(map((data:any)=>data.data.results))

  }
}

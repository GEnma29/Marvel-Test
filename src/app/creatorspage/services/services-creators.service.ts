import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicesCreatorsService {

  constructor(private http:HttpClient) { }
  private PUBLIC_KEY="bd97722a0e0785aea63027c4c05bade1"
  private HASH='c5c8e6785e17a8941c28c31fe1e68ef0'

  public getCreators(){
    const Urlapi= `https://gateway.marvel.com/v1/public/creators?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
    return this.http.get(Urlapi).pipe(map((data:any)=>data.data.results))

  }
}

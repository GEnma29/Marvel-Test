import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiciosService} from '../servicios/servicos.service'
@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  public DataSerie: any;
  public Comics: any;
  public Series:any;
  public Creators: any;

  constructor(private activatedRoute:ActivatedRoute, private servicesSeries:ServiciosService) { }
  private PUBLIC_KEY="bd97722a0e0785aea63027c4c05bade1"
  private HASH="c5c8e6785e17a8941c28c31fe1e68ef0"

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramMap=>{
      const {id} = paramMap
      this.getSerie(id)
      this.getCreators(id)
    })
  }
  getSerie(id:string){

    const Urlapi= `https://gateway.marvel.com:443/v1/public/series/${id}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
    
    this.servicesSeries.get(Urlapi).subscribe(resp=>{
      return this.DataSerie= resp.data.results[0]
    })

  }

  getCreators(id: string){
    return this.Creators =this.servicesSeries.getCreators(id)
  }
}

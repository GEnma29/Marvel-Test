import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesCreatorsService } from '../services/services-creators.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {
  public Series:any;
  public Comics:any;
  public DataCreator:any;

  constructor(private activatedRouter:ActivatedRoute, private servicesCreators:ServicesCreatorsService) { }
  private PUBLIC_KEY="bd97722a0e0785aea63027c4c05bade1"
  private HASH='c5c8e6785e17a8941c28c31fe1e68ef0'

  ngOnInit(): void {

    this.activatedRouter.params.subscribe(paramMap=>{
      const {id} = paramMap
      this.getCreator(id)
      this.getComics(id)
      this.getSeries(id)

    })

  }
  getComics(id:string){

    return this.Comics =this.servicesCreators.getComics(id)

  }
  getSeries(id:string){

    return this.Series = this.servicesCreators.getSeries(id)

  }

  getCreator(id:string){

    const Urlapi= `https://gateway.marvel.com:443/v1/public/creators/${id}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
    
    this.servicesCreators.get(Urlapi).subscribe(resp=>{
      this.DataCreator= resp.data.results[0]
    })

  }

}

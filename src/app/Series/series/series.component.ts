import { Component, OnInit } from '@angular/core';
import {ServiciosService} from '../servicios/servicos.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public AllSeries: any;
  public filterSeries=""

  constructor(private seriesServicios:ServiciosService) { }


  ngOnInit(): void {

    this.getSeries();
  }
  getSeries(){

    return this.AllSeries = this.seriesServicios.getAllSeries();
    
  }

}

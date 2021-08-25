import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-page-series',
  templateUrl: './details-page-series.component.html',
  styleUrls: ['./details-page-series.component.css']
})
export class DetailsPageSeriesComponent implements OnInit {
  @Input() DataPage: any;

  constructor() { }

  ngOnInit(): void {
  }

}

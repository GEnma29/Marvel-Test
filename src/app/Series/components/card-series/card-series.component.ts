import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-series',
  templateUrl: './card-series.component.html',
  styleUrls: ['./card-series.component.css']
})
export class CardSeriesComponent implements OnInit {
  @Input() DataCard:any;
  constructor() { }

  ngOnInit(): void {
  }

}

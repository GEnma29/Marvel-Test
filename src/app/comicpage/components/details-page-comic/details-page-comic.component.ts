import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-page-comic',
  templateUrl: './details-page-comic.component.html',
  styleUrls: ['./details-page-comic.component.css']
})
export class DetailsPageComicComponent implements OnInit {
@Input() DataPage: any;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-page-creator',
  templateUrl: './details-page-creator.component.html',
  styleUrls: ['./details-page-creator.component.css']
})
export class DetailsPageCreatorComponent implements OnInit {
  @Input() DataPage: any;
  constructor() { }

  ngOnInit(): void {
  }

}

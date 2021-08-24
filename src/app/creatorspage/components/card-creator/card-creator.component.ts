import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-creator',
  templateUrl: './card-creator.component.html',
  styleUrls: ['./card-creator.component.css']
})
export class CardCreatorComponent implements OnInit {
  @Input() DataCard: any;
  constructor() { }

  ngOnInit(): void {
  }

}

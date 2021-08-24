import { Component, OnInit, Input } from '@angular/core';
import {RequestCharacter, Result,Thumbnail, } from "../../models/reques-response"
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
@Input() DataPage:any;

  constructor() { }

  ngOnInit(): void {
  }

}

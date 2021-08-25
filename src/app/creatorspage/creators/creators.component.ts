import { Component, OnInit } from '@angular/core';
import { ServicesCreatorsService } from '../services/services-creators.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {
public AllCreator: any;
  constructor(private serviceCreator:ServicesCreatorsService) { }
  filterCreator=""

  ngOnInit(): void {
    this.getAllCreator();
  }
  getAllCreator(){
   this.AllCreator = this.serviceCreator.getCreators();
  }

}

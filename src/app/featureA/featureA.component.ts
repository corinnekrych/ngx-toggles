import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-feature',
  templateUrl: './featureA.component.html',
  styleUrls: ['./featureA.component.css']
})
export class FeatureAComponent implements OnInit {

  constructor() {
    console.log('FeatureAComponent:constructor');
  }

  ngOnInit() {
    console.log('FeatureAComponent:init');
  }

}

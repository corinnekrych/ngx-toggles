import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feature-a',
  template: '<p>Feature A is loaded and it\'s ready for work!</p>'
})
export class FeatureAComponent implements OnInit {

  constructor() {
    console.log('FeatureAComponent:constructor');
  }

  ngOnInit() {
    console.log('FeatureAComponent:init');
  }

}

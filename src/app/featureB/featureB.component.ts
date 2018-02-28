import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-b',
  template: '<p>Feature B is loaded and it\'s ready for work!</p>'
})
export class FeatureBComponent implements OnInit {

  constructor() {
    console.log('FeatureBComponent:constructor');
  }

  ngOnInit() {
    console.log('FeatureBComponent:constructor');
  }

}

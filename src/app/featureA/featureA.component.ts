import { Component, OnInit } from '@angular/core';
import {FakeService} from '../service/fake.service';


@Component({
  selector: 'app-feature-a',
  template: '<p>Feature A is loaded and it\'s ready for work!</p>',
  providers: []
})
export class FeatureAComponent implements OnInit {

  constructor(private fakeService: FakeService) {
    console.log('FeatureAComponent:constructor');
  }

  ngOnInit() {
    console.log('FeatureAComponent:init');
    this.fakeService.getSomethingRemotely();
  }

}

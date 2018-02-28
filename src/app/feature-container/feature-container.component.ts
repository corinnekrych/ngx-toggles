import {Component, Input, OnInit} from '@angular/core';
import {FeatureAComponent} from '../featureA/featureA.component';
import {FeatureBComponent} from '../featureB/featureB.component';
import {Type} from '@angular/compiler/src/core';
import {FeatureFlagService} from '../service/feature-flag.service';

@Component({
  selector: 'app-feature-container',
  template: `<ng-template *ngComponentOutlet="featureComponent"></ng-template>`
})
export class FeatureContainerComponent implements OnInit {
  @Input() featureName: string;
  featureComponent: Type;

  constructor(private featureFlagService: FeatureFlagService) {}

  ngOnInit() {
    this.featureFlagService.toggleSubject.subscribe(value => {
      console.log(`FeatureContainerComponent::Toggle ${value.feature} changed to ${value.mode}`);
      if (this.featureName === value.feature) {
        if (value.mode) {
          this.featureComponent = this.convertFeatureNameToComponent(value.feature);
        } else {
          this.featureComponent = null;
        }
      }
    });
  }

  convertFeatureNameToComponent(name: string): Type {
    if (name === 'featureA') {
      return FeatureAComponent;
    } else if (name === 'featureB') {
      return FeatureBComponent;
    } else {
      return undefined;
    }
  }
}

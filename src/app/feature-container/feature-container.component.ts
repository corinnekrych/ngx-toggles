import {Component, Input, OnInit, QueryList, ViewChild, ViewContainerRef} from '@angular/core';
import {LoaderService} from '../service/loader.service';
import {FeatureAComponent} from '../featureA/featureA.component';
import {FeatureBComponent} from '../featureB/featureB.component';
import {Type} from '@angular/compiler/src/core';
import {FeatureFlagService} from '../service/feature-flag.service';

@Component({
  selector: 'app-feature-container',
  template: `<ng-template #dynamic></ng-template>`
})
export class FeatureContainerComponent implements OnInit {
  @Input() featureName: string;
  @ViewChild('dynamic', {read: ViewContainerRef}) viewContainerRef: QueryList<ViewContainerRef>;

  constructor(private loaderService: LoaderService, private featureFlagService: FeatureFlagService) {}

  ngOnInit() {
    this.featureFlagService.toggleSubject.subscribe(value => {
      let mine = this.viewContainerRef;
      console.log(`::::FeatureContainerComponent::QueryList is ${this.viewContainerRef.length}`);
      console.log(`FeatureContainerComponent::Toggle ${value.feature} changed to ${value.mode}`);
      if (this.featureName === value.feature) {
        if (value.mode) {
          this.loaderService.setRootViewContainerRef(this.viewContainerRef);
          this.loaderService.addComponentDynamically(this.convertFeatureNameToComponent(value.feature));
        } else {
          this.loaderService.setRootViewContainerRef(this.viewContainerRef);
          this.loaderService.removeComponent(this.convertFeatureNameToComponent(value.feature));
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

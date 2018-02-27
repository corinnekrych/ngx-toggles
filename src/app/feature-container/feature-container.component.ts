import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {LoaderService} from '../service/loader.service';
import {FeatureAComponent} from '../featureA/featureA.component';
import {Type} from '@angular/compiler/src/core';
import {FeatureFlagService} from '../service/feature-flag.service';

@Component({
  selector: 'app-feature-container',
  template: `<ng-template #dynamic></ng-template>`
})
export class FeatureContainerComponent implements OnInit {
  @ViewChild('dynamic', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;


  constructor(private loaderService: LoaderService, private featureFlagService: FeatureFlagService) {}

  ngOnInit() {
    // where to create the component
    this.loaderService.setRootViewContainerRef(this.viewContainerRef);

    this.featureFlagService.toggleSubject.subscribe(value => {
      console.log(`FeatureContainerComponent::Toggle changed to ${value.mode}`);
      if (value.mode) {
        this.loaderService.addComponentDynamically(FeatureAComponent as Type);
      } else {
        this.loaderService.removeComponent(FeatureAComponent as Type);
      }
    });
  }

}

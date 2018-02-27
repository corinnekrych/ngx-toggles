import {Component, ViewContainerRef} from '@angular/core';
import {LoaderService} from './service/loader.service';
import {FeatureAComponent} from './featureA/featureA.component';
import {Type} from '@angular/compiler/src/core';
import {FeatureFlagService} from './service/feature-flag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-toggles';

  constructor(private featureFlagService: FeatureFlagService) {

  }

  toggleChanged(value: boolean) {
    console.log(`AppComponent::Toggle is ${value}`);
    this.featureFlagService.toggleSubject.next({mode: value});
  }
}

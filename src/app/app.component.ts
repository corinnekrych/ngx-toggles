import {Component} from '@angular/core';
import {FeatureFlagService, ToggleModel} from './service/feature-flag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-toggles';

  constructor(private featureFlagService: FeatureFlagService) {}

  toggleChanged(value: ToggleModel) {
    console.log(`AppComponent::Toggle for ${value.feature} is ${value.mode}`);
    this.featureFlagService.toggleSubject.next(value);
  }
}

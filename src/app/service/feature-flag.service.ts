import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class ToggleModel {
  feature: string;
  mode: boolean;
}

@Injectable()
export class FeatureFlagService {
  toggleSubject: BehaviorSubject<ToggleModel>;
  defaultToggle = {
    feature: '',
    mode: false
  } as ToggleModel;
  toggles: ToggleModel[];
  constructor() {
    this.toggleSubject = new BehaviorSubject<ToggleModel>(this.defaultToggle);
  }
}

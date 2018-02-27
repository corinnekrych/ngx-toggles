import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class ToggleModel {
  feature: string;
  mode: boolean;
}

@Injectable()
export class FeatureFlagService {
  toggleSubject: BehaviorSubject<ToggleModel>;
  toggle = {
    feature: '',
    mode: false
  } as ToggleModel;
  constructor() {
    this.toggleSubject = new BehaviorSubject<ToggleModel>(this.toggle);
  }
}

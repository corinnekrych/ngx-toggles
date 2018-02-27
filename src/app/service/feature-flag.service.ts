import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class ToggleModel {
  mode: boolean;
}

@Injectable()
export class FeatureFlagService {
  toggleSubject: BehaviorSubject<ToggleModel>;
  toggle = {mode: false};
  constructor() {
    this.toggleSubject = new BehaviorSubject<ToggleModel>(this.toggle);
  }
  toggleChanged() {
    console.log(`Toggle is ${this.toggle.mode}`);
    this.toggle.mode = !this.toggle.mode;
    this.toggleSubject.next(this.toggle);
  }
}

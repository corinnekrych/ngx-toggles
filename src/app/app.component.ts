import {Component, ViewContainerRef} from '@angular/core';
import {LoaderService} from './service/loader.service';
import {FeatureAComponent} from './featureA/featureA.component';
import {Type} from '@angular/compiler/src/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class ToggleModel {
  mode: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-toggles';
  toggle = {mode: false} as ToggleModel;
  toggleSubject: BehaviorSubject<ToggleModel>;

  constructor(private service: LoaderService, private viewContainerRef: ViewContainerRef) {
    // where to create the component
    service.setRootViewContainerRef(viewContainerRef);

    this.toggle.mode = false;
    this.toggleSubject = new BehaviorSubject<ToggleModel>(this.toggle);
    this.toggleSubject.subscribe(value => {
      console.log(`Toggle changed to ${value.mode}`);
      if (this.toggle.mode) {
        this.service.addComponentDynamically(FeatureAComponent as Type);
      } else {
        this.service.removeComponent(FeatureAComponent as Type);
      }
    });
  }
  toggleChanged() {
    console.log(`Toggle is ${this.toggle.mode}`);
    this.toggle.mode = !this.toggle.mode;
    this.toggleSubject.next(this.toggle);
  }
}

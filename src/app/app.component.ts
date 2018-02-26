import {Component, ViewContainerRef} from '@angular/core';
import {LoaderService} from './service/loader.service';
import {FeatureAComponent} from './featureA/featureA.component';
import {Type} from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private service: LoaderService, private viewContainerRef: ViewContainerRef) {
    service.setRootViewContainerRef(viewContainerRef);
  }
  loadFeatureA() {
    this.service.addComponentDynamically(FeatureAComponent as Type);
  }
}

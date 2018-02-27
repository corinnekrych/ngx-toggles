import {Injectable, Type, ComponentFactoryResolver, ViewContainerRef, Component} from '@angular/core';

@Injectable()
export class LoaderService {
  private rootViewContainer: ViewContainerRef;
  private addedComponents = [];

  constructor(private factoryResolver: ComponentFactoryResolver) {}

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addComponentDynamically(type: Type<Component>) {
    const factory = this.factoryResolver.resolveComponentFactory(type);
    const component = factory.create(this.rootViewContainer.parentInjector);
    this.addedComponents.push(component);
    this.rootViewContainer.insert(component.hostView);
  }
  removeComponent(type: Type<Component>) {
    const index = this.addedComponents.findIndex((c) => c ? c.instance instanceof type : false);
    if (this.addedComponents[index]) { // if this is an added component
      const componentIndex = this.rootViewContainer.indexOf(this.addedComponents[index]);
      console.log(`index: ${index}`);
      if (componentIndex >= 0) { // delete form the view
        this.rootViewContainer.remove(this.rootViewContainer.indexOf(this.addedComponents[index]));
      }
      delete this.addedComponents[index]; // delete in the list of added components
    }
  }

}

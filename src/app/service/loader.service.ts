import {Injectable, Type, ComponentFactoryResolver, ViewContainerRef, Component} from '@angular/core';

@Injectable()
export class LoaderService {
  private rootViewContainer: ViewContainerRef;

  constructor(private factoryResolver: ComponentFactoryResolver) {}

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addComponentDynamically(type: Type<Component>) {
    const factory = this.factoryResolver.resolveComponentFactory(type);
    const component = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }
}

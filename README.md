# NgxToggles

This sample project experiments dynamic load in Angular 2+ framework.

## Build & run

```
npm i
npm start
```
Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

## Experiments

### step1: load a component
```
git checkout step1
```
Dynamically load a component in the same module as the component laoding ti.
Load a sibling.

### step2: load as children of a wapper component
```
git checkout step2c
```
Instead of adding our `FeatureAComponent` directly as a sibling of your `AppComponent`,
let's have a wrapper component where we add the feature component as a child.
When using `FeatureContainerComponent` as a wrapper the loderService need to be called within
`ngInit` once the wrapper component has been initialized.

We've added 2 components: `FeatureAComponent` and `FeatureBComponent`.
See [step2](step2.png).

### step3: load component from module
```
git checkout step3
```
You need to import the `FeatureAModule`, `FeatureBModule` from `AppModule`.
> Note: The modules are not dynamically loaded. 
  Sth similar to SystemJsNgModuleLoader but for webpack needs to be found.

### step4: use strucutal directive `ngComponentOutlet`
```
git checkout step4
```
If you don't need to create several instances, ie: a simple toggle fits!
You can use `ngComponentOutlet`.
It removes all the boiler plate of our `FeatureContainerComponent`.

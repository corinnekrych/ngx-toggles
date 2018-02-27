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
git checkout step2
```
Instead of adding our `FeatureAComponent` directly as a sibling of your `AppComponent`,
let's have a wrapper component where we add the feature component as a child.
When using `FeatureContainerComponent` as a wrapper the loderService need to be called within
`ngInit` once the wrapper component has been initialized.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAComponent } from './featureA.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeatureAComponent],
  exports: [FeatureAComponent]
})
export class FeatureAModule {
  constructor() {
    console.log('FeatureAModule::init');
  }
}

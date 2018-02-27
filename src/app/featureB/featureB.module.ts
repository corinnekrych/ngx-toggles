import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureBComponent } from './featureB.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeatureBComponent],
  exports: [FeatureBComponent]
})
export class FeatureBModule {
  constructor() {
    console.log('FeatureBModule::init');
  }
}

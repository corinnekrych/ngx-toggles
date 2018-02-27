import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureAComponent } from './featureA/featureA.component';
import {LoaderService} from './service/loader.service';
import {NgModule} from '@angular/core';
import {FeatureContainerComponent} from './feature-container/feature-container.component';
import {FeatureFlagService} from './service/feature-flag.service';
import { FeatureBComponent } from './featureB/featureB.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureAComponent,
    FeatureBComponent,
    FeatureContainerComponent,
    FeatureBComponent
  ],
  entryComponents: [FeatureAComponent, FeatureBComponent],
  imports: [
    BrowserModule
  ],
  providers: [LoaderService, FeatureFlagService],
  bootstrap: [AppComponent]
})
export class AppModule { }

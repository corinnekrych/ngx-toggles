import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureAComponent } from './featureA/featureA.component';
import {LoaderService} from './service/loader.service';
import {NgModule} from '@angular/core';
import {FeatureContainerComponent} from './feature-container/feature-container.component';
import {FeatureFlagService} from './service/feature-flag.service';

@NgModule({
  declarations: [
    AppComponent,
    FeatureAComponent,
    FeatureContainerComponent
  ],
  entryComponents: [FeatureAComponent],
  imports: [
    BrowserModule
  ],
  providers: [LoaderService, FeatureFlagService],
  bootstrap: [AppComponent]
})
export class AppModule { }

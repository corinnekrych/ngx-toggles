import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureAComponent } from './featureA/featureA.component';
import {NgModule} from '@angular/core';
import {FeatureContainerComponent} from './feature-container/feature-container.component';
import {FeatureFlagService} from './service/feature-flag.service';
import { FeatureBComponent } from './featureB/featureB.component';
import {FeatureBModule} from './featureB/featureB.module';
import {FeatureAModule} from './featureA/featureA.module';

@NgModule({
  declarations: [
    AppComponent,
    FeatureContainerComponent
  ],
  entryComponents: [FeatureAComponent, FeatureBComponent],
  imports: [
    BrowserModule,
    FeatureAModule,
    FeatureBModule,
  ],
  providers: [FeatureFlagService],
  bootstrap: [AppComponent],
  exports: [FeatureContainerComponent]
})
export class AppModule { }

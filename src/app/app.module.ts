import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureAComponent } from './featureA/featureA.component';
import {LoaderService} from './service/loader.service';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    FeatureAComponent
  ],
  entryComponents: [FeatureAComponent],
  imports: [
    BrowserModule
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

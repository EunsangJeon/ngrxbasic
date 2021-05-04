import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {reducer} from './reducers/reducers';
import {EbayComponent} from './ebay/ebay.component';
import {AmazonComponent} from './amazon/amazon.component';
import {EffectsModule} from '@ngrx/effects';
import {SearchEffects} from './effects/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment.prod';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EbayComponent,
    AmazonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({myReducer: reducer}),
    EffectsModule.forRoot([SearchEffects]),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

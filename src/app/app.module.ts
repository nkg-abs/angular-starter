import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { counterReducer } from './counter.reducer';
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from './my-counter/my-counter.component'
import { Value } from './my-counter/value.pipe';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    MoviesComponent,
    Value,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ root: counterReducer}),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

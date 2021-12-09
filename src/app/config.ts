import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";
import { counterReducer } from "./counter.reducer";
import { ItemComponent } from "./list/item/item.component";
import { ListComponent } from "./list/list.component";
import { MoviesComponent } from "./movies/movies.component";
import { ChildComponent } from "./my-counter/child/child.component";
import { CounterValueComponent } from "./my-counter/counter-value/counter-value.component";
import { MyCounterComponent } from "./my-counter/my-counter.component";
import { Value } from "./my-counter/value.pipe";

//NOTE: appModule is not able to use imported config, unlike testingBed.
export const config = {
  declarations: [
    AppComponent,
    MyCounterComponent,
    ItemComponent,
    ListComponent,
    ChildComponent,
    Value,
    MoviesComponent,
    CounterValueComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ root: counterReducer }),
    HttpClientModule,
  ],
  providers: [],
  // bootstrap: [AppComponent]
}

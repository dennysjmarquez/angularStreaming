import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Modules
import {AppRoutersModule} from "./routers/app-routers-routing.module";

// Components
import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

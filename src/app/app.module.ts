import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { JioComponent } from './jio/jio.component';
import { AppRoutingModule } from "./route";
import { NovalidComponent } from './novalid/novalid.component';


@NgModule({
  declarations: [
    AppComponent,
    JioComponent,
    NovalidComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

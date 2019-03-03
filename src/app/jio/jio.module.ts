import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JioComponent } from './jio.component';


@NgModule({
  declarations: [
    JioComponent
  ],
  imports: [
    BrowserModule
  ],  exports: [
    JioComponent
],
  providers: [],
  bootstrap: [JioComponent]
})
export class JioModule { 


}

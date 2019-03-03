import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NovalidComponent } from './novalid.component';



@NgModule({
  declarations: [
    NovalidComponent
  ],
  imports: [
    BrowserModule
  ], 
   exports: [
    NovalidComponent
],

  providers: [],
  bootstrap: [NovalidComponent]
})
export class NovalidModule { 

}

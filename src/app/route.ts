import { NgModule }   from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {NovalidComponent} from './novalid/novalid.component';
import { JioComponent } from './jio/jio.component';


var appRoutes: Routes = [
    {
        path:'home',
        component: AppComponent 
    },
    {
      path:'app-novalid',
      component: NovalidComponent  
    },
    {
      path:'jio',
      component: JioComponent  
    },
    {
      path:'*',
      redirectTo: 'app-novalid',
      pathMatch:'full' 
  }
  ];



@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes)
  ],
  exports:[
      RouterModule
  ],
  providers:[
      //AuthGuards
  ]
})

export class AppRoutingModule{
  
}
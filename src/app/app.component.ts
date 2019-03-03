import { Component } from '@angular/core';


import {FormsModule} from '@angular/forms'
import { JioComponent } from './jio/jio.component';
import { NovalidComponent } from './novalid/novalid.component';

@Component({
  selector: 'app-mani',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maniprasad';
  firstname ="";
 
}

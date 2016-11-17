import { Component } from '@angular/core';
import { Config } from './shared/index';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}

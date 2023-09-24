import {
  Component
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-root',
  templateUrl: './misc.component.html'
})
export class AppComponent  {

  title = 'miscelaneos';

  constructor() {
    console.log('Constructor');
  }
}

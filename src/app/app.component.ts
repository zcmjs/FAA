import {Component} from '@angular/core';
import {DomSanitizer, SafeHtml, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskName = 'Sugerowane codzienne zadanie';

}

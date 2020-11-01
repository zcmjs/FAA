import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml, SafeUrl} from '@angular/platform-browser';
import {HttpService} from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  taskName = 'Sugerowane codzienne zadanie'

  constructor(private httpService: HttpService) {

  }

  ngOnInit(): void {
    this.httpService.getMovies().subscribe(val => {
      console.log(val);
    });
  }

}

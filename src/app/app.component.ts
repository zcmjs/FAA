import {Component, OnInit} from '@angular/core';
import {from, Observable} from 'rxjs';
import {filter, map, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  taskName = 'Sugerowane codzienne zadanie';

  basicObservable(): void {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  }

  ngOnInit(): void {
    this.basicObservable();
  }

}

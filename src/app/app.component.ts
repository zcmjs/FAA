import {Component, OnInit} from '@angular/core';
import {from, Observable, of, Subject, BehaviorSubject} from 'rxjs';
import {filter, map, toArray} from 'rxjs/operators';
import { Person } from './services/data-base.service';
import { DataServiceService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hidden = true;
  person: Person = {firstName: '', lastName:''}
  constructor(private dataService: DataServiceService) {
  }

  add() {
    this.dataService.addPerson(this.person);
  }

}

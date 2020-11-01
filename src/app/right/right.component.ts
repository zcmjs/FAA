import { Component, OnInit } from '@angular/core';
import { Person } from '../services/data-base.service';
import { Observable } from 'rxjs';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  persons: Observable<Array<Person>>;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    //Subject od razu propaguje dane, nie ważne czy subskrybujesz, dlatego możesz stracić dane jeśli spóźnisz się z subskrypcją
    //subject nie przechowuje ost wartosci
    this.persons = this.dataService.subject.asObservable();
  }

}

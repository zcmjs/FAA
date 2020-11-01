import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject, Observer} from 'rxjs';
import {Person, DataBaseService} from './data-base.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  //do konstruktora, przekazujemy pusta listę
  behaviourSubject = new BehaviorSubject<Array<Person>>([]);
  subject = new Subject<Array<Person>>();

  constructor(private dataBaseService: DataBaseService) {
    this.init();
  }

  addPerson(person: Person) {
    this.dataBaseService.addPerson(person).subscribe(this.observer('add person'));
  }


  private init(): void {
    this.dataBaseService.fetchPersons().subscribe(this.observer('getALl'));
  }

  //Complete w Obserwer, gdy kończy pracy
  private observer(message: string): Observer<Array<Person>>{
    return {
      next: (persons: Array<Person>) => {
        this.behaviourSubject.next(persons);
        this.subject.next(persons);
      },
      error: error => console.log(error),
      complete: () => console.log(message)
    }
  }

}

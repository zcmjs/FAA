import {Component, OnInit, OnDestroy} from '@angular/core';
import {Person} from '../services/data-base.service';
import {DataServiceService} from '../services/data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit, OnDestroy {
  persons: Array<Person>;

  private subscriptions = new Subscription();

  constructor(private dataService: DataServiceService) {

  }

  //nie ma info, że subskrypacja się zakończyła
  //Subject i BehaviorSubject raz nawiązaną subskrypcje bedzie utrzymywać aż my jej nie zakończymy
  ngOnInit() {
    //Przy posiadaniu 1 subksrypcji w komponencie możemy bezposrednio przypisać obket do pola subscriptions. Przy paru należy użyć add
    const sub = this.dataService.behaviourSubject.subscribe((persons: Array<Person>) => {
        this.persons = persons;
        console.log('Left Component Subscription');
      },
      error => console.log(error),
      //complete uruchamia tylko w przypadku complete. JEgo uruchomienie powoduje zniszczenie wszystkich subskrypcji, ktore obsługuje
      () => console.log('LeftComponent complete')
    );

    this.subscriptions.add(sub);
  }

  ngOnDestroy(): void {
    //usunie wszystkie subskrypcje dodane za pomocą add lub tą pojedynczą
    this.subscriptions.unsubscribe();
  }

}

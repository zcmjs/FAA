import {Component, OnInit} from '@angular/core';
import {from, Observable, of, Subject, BehaviorSubject} from 'rxjs';
import {filter, map, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  taskName = 'Sugerowane codzienne zadanie';

// Observable jest strumieniem danych wszelkiego rodzaju
// Subskrybowanie oznacza podłączenie się do strumienia danych.
// Podłączenie to zazwyczaj trwa cały czas i dane możemy otrzymywać w różnych odcinkach czasowych
  basicObservable(): void {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const observable: Observable<Array<number>> = of(numbers);
    // of -tworzy obiekt observalbe


    //jesli subscript nie bedziemy obserwowac, to nie otrzymamy informacji
    observable.subscribe(x => {
      console.log(x);
    });
    //podobną do działania Of jest funkcja from, która zwraca liste pojedynczych elementów, a nie tablicę elementów
    //W środku metody pipe wstawiamy operatory
    const observable2: Observable<number> = from(numbers);
    observable2.pipe(
      map(n => n * 3),
      filter(n => n % 2 === 0),
      // toArray()
    ).subscribe(x => {
      console.log(x);
    });
  }

  //Subjecty to specjalne observable, ktore powalazją dzielicdane na wielu subskrybentów
  basicSubject(): void {
    const subject = new Subject<number>();

    subject.subscribe(x=>console.log(x));
    subject.next(2137);

    //behaviorSubject zawsze przetrzymuję ostatnią wartość lub wartośc initializacyjną
    const bSubject = new BehaviorSubject<number>(666);
    bSubject.next(999);
    bSubject.subscribe(x=>console.log(x)); //999

    //Każda subskrypcja pracuję w pamięci przeglądarki
    subject.unsubscribe();
    bSubject.unsubscribe();
  }
  //Observable vs subject. Observable jest tworzone nowe dla każdego. Każdy dostanię tą samą partię danych.
  //Subject tworzy jedno observable dla wielu subskrybentów

  ngOnInit(): void {
    // this.basicObservable();
    this.basicSubject();
  }

}

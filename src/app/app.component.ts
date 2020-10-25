import {Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Quotation} from '../model/Quotation';
import {QUOTES} from '../model/database';
import {ChildReferenceTrainingComponent} from './child-reference-training/child-reference-training.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quotation[] = QUOTES;

  // @ViewChild('child1', {static: false})
  // childOne: ChildReferenceTrainingComponent;
  // zamiast przez nazwę po można poprzez typ. W przypadku kilku takich samych typów, zostawnioe wszystkiniete tylko do pierszego elementu tego type. Unas #child1
  @ViewChild(ChildReferenceTrainingComponent, {static: false})
  childOne: ChildReferenceTrainingComponent;

  @ViewChild('child2', {static: false})
  childTwo: ChildReferenceTrainingComponent;

  @ViewChildren(ChildReferenceTrainingComponent)
  allReferenceChildren: QueryList<ChildReferenceTrainingComponent>;


  addVote(quotation: Quotation, value: number): void {
    quotation.votes += value;
  }

  addQuotation(quotation: Quotation): void {
    this.quotes.unshift(quotation);
  }

  stringEvent(message: string) {
    alert(message);
  }

  voidEvent() {
    alert('Wywołano Void');
  }

  printAllReferenceTrainingChildren(): void {
    this.allReferenceChildren.forEach(child => child.print());
  }
}

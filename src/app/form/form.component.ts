import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quotation} from '../../model/Quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  showForm = true;

  // Może tez byc emiter, nic nie wysyłajcy  new EventEmitter<void>();
  @Output() add: EventEmitter<Quotation> = new EventEmitter<Quotation>();

  // Przyklad uzycia emitera z poziomu html
  @Output() stringEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() voidEvent: EventEmitter<void> = new EventEmitter<void>();

  quotation: Quotation = {
    author: '',
    sentence: '',
    votes: 0
  };

  show(): void {
    this.showForm = !this.showForm;
  }

  addQuotation() {
    this.add.emit(this.quotation);
    this.quotation = {author: '', sentence: '', votes: 0};
  }

}

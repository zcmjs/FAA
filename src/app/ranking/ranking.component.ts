import {Component, Input} from '@angular/core';
import {Quotation} from '../../model/Quotation';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {

  @Input()
  quotes: Array<Quotation>;
  @Input()
  isBest: boolean;

  constructor() { }

}

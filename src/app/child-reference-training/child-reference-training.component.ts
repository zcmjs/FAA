import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-reference-training',
  templateUrl: './child-reference-training.component.html',
  styleUrls: ['./child-reference-training.component.css']
})
export class ChildReferenceTrainingComponent implements OnInit {
  @Input() version: number;

  print(): void {
    console.log('Tutaj crtc in version ' + this.version);
  }

  ngOnInit() {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FormComponent} from './form/form.component';
import {ChildReferenceTrainingComponent} from './child-reference-training/child-reference-training.component';
import {RankingComponent} from './ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,d
    ChildReferenceTrainingComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

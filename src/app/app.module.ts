import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FormComponent} from './form/form.component';
import {ChildReferenceTrainingComponent} from './child-reference-training/child-reference-training.component';
import {RankingComponent} from './ranking/ranking.component';
import { DynamicButtonComponent } from './dynamic-button/dynamic-button.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    ChildReferenceTrainingComponent,
    RankingComponent,
    DynamicButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

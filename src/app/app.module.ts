import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';

@NgModule({
  declarations: [AppComponent, LeftComponent, RightComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

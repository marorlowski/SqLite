import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ButtonModule,SplitButtonModule} from 'primeng/primeng';
import {AppService} from "./app.service";
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {HttpModule} from "@angular/http";
import {CalendarModule} from 'primeng/primeng';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

import {AccordionModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    SplitButtonModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AccordionModule,



  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

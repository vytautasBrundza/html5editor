import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

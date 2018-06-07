import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StockOverviewComponent } from './stock-overview/stock-overview.component';
import { StockCardComponent } from './stock-card/stock-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StockOverviewComponent,
    StockCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

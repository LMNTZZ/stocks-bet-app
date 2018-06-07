import { Component } from '@angular/core';
import {Stock} from './stock';
import {StocksService} from './stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public selectionCounter : number;
  public addedStock : any;

  // stocks = [
  //   {tickerCode: 'AMZN', companyName: 'Amazon.com Incorporated', imgUrl: 'https://s3.amazonaws.com/BURC_Pages/downloads/a-smile_color.png' },
  //   {tickerCode: 'GOOG', companyName: 'Alphabet Incorporated', imgUrl: 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-128.png'},
  //   {tickerCode: 'FB', companyName: 'Facebook Incorporated', imgUrl: 'https://www.shareicon.net/data/256x256/2015/08/29/92757_like_606x606.png'},
  //   {tickerCode: 'AAPL', companyName: 'Apple Incorporated', imgUrl: 'http://pngimg.com/uploads/apple_logo/apple_logo_PNG19679.png'},
  //   {tickerCode: 'MSFT', companyName: 'Microsoft Corporation', imgUrl: 'https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/microsoft-256.png'},
  //   {tickerCode: 'IBM', companyName: 'International Business Machines', imgUrl: 'http://www.crescointl.com/wp-content/uploads/2016/05/ibm.png'}
  // ];

  public stocks: Stock[];

  constructor(stocksService : StocksService) {
    this.stocks = stocksService.getStocks();
  }
}

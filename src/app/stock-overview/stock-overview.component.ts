import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock-overview',
  templateUrl: './stock-overview.component.html',
  styleUrls: ['./stock-overview.component.css']
})
export class StockOverviewComponent implements OnInit {

  faveStocks = [];
  selectedNum = 0;
  constructor() { }

  ngOnInit() {
  }


  getFaveStocks() {
    return JSON.stringify(this.faveStocks);
  }


  @Input('addedStock')
  set addedStock(selectedStock: any) {
    console.log('addedStock : ' + JSON.stringify(selectedStock));
    if (selectedStock) {
      let stockIndex = this.faveStocks.indexOf(selectedStock.title);
      if (stockIndex > -1) {
        this.faveStocks.splice(stockIndex, 1);
      } else {
        this.faveStocks.push(selectedStock.title);
      }
    }
  }

}

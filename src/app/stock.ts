export class Stock {
  tickerCode: string;
  companyName: string;
  imgUrl: string;

  constructor(tickerCode, companyName, imgUrl) {
    this.tickerCode = tickerCode;
    this.companyName = companyName;
    this.imgUrl = imgUrl;
  }
}

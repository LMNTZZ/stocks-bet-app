import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  @Input() title : string = 'Default title';
  @Input() companyName : string = 'No company name provided';

  imageUrl = '';
  @Input()
  set imgUrl(imgUrl : string) {
    this.imageUrl = imgUrl || 'https://i1.wp.com/tutorialsdojo.com/wp-content/uploads/2016/12/angular2_tutorialsdojo.jpg';
  }
  get imgUrl() : string { return this.imageUrl; }

  @Output() addToList = new EventEmitter<any>();

  background_color = '#1B9CFC';
  selected : boolean = false;
  btnLabel = 'Bet';

  constructor() { }

  ngOnInit() {
  }

  selectCard(){
    this.selected = !this.selected;
    this.background_color = this.selected ? 'lightgreen' : '#1B9CFC';
    console.log('this.title : ' + this.title);
    this.btnLabel = this.selected ? 'Remove Bet' : 'Bet';
    this.addToList.emit({title: this.title, selected: this.selected});
  }

}

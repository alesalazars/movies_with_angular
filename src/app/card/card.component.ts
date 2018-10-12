import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('title') title:string;
  @Input('year') year:number;
  @Input('img') img:string;
  @Input('director') director:string;
  @Input('id') id:string;

  constructor() { }

  ngOnInit() {
  }

}

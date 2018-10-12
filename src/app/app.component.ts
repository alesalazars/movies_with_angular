import { Component, OnInit } from '@angular/core';
import { Store } from './store/store';
import { Ngex } from 'ngex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Store]
})
export class AppComponent {
  title = 'peliculas';

  loader:boolean = true;

  constructor(private store:Store, private ngex:Ngex){}

  ngOnInit(){
    this.ngex.state.subscribe(state => {
      console.log(state);
    })
  }

}

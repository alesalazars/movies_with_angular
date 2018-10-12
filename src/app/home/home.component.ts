import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { Ngex } from 'ngex';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PeliculasService]
})
export class HomeComponent implements OnInit {
  loader:boolean = true;
  data:Peliculas[];
  datos:any;

  constructor(private service:PeliculasService, private ngex:Ngex) { }

  ngOnInit() {
    // this.service.getPeliculas().subscribe(response =>{
    //   console.log(response);
    //   this.datos = response['data'];
    // })

    this.loader = false;

    this.ngex.state.subscribe(state => {
      this.datos = state['data'];
    })

    this.service.getPeliculas();

  }

}

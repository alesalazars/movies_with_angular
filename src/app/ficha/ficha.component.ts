import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css'],
  providers: [PeliculasService]
})
export class FichaComponent implements OnInit {
  loader:boolean = true;
  datos:any;

  constructor(private route:ActivatedRoute, private service:PeliculasService) { }

  ngOnInit() {

    this.service.getPeliculasID(this.route.snapshot.params['id']).subscribe(response =>{
      this.datos = response['data'];
    })
  }

}

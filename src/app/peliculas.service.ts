import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ngex } from 'ngex';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient, private ngex:Ngex) { }

  getPeliculas(){
    this.http.get('http://taller-cardumen.herokuapp.com/peliculas').subscribe(response => {
      this.ngex.emit('GET_PELICULAS', response['data']);
    })
  }

  getPeliculasID(id){
    return this.http.get('http://taller-cardumen.herokuapp.com/peliculas/' + id)
  }


}

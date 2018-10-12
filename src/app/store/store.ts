import { Injectable } from '@angular/core';
import { Ngex } from 'ngex';
import { state } from './state';
import { actions } from './actions';

@Injectable()

export class Store {
    constructor(private ngex:Ngex){
        this.ngex.createStore(state);
        this.ngex.createActions(actions);
    }
}
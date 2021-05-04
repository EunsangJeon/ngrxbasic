import { Component, OnInit } from '@angular/core';
import {State} from '../reducers/reducers';
import {Store} from '@ngrx/store';
import {getSearchQuery, getSearchResults} from '../selectors/selector';

@Component({
  selector: 'app-ebay',
  templateUrl: './ebay.component.html',
  styleUrls: ['./ebay.component.css']
})
export class EbayComponent {

  searchFor$ = this.store.select(getSearchQuery);
  searchResults$ = this.store.select(getSearchResults);

  constructor(private store: Store<State>) { }
}

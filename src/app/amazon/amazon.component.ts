import { Component, OnInit } from '@angular/core';
import {getSearchQuery, getSearchResults} from '../selectors/selector';
import {Store} from '@ngrx/store';
import {State} from '../reducers/reducers';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {

  searchFor$ = this.store.select(getSearchQuery);
  searchResults$ = this.store.select(getSearchResults);

  constructor(private store: Store<State>) { }
}

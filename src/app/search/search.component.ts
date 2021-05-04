import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Store} from '@ngrx/store';
import {debounceTime, tap} from 'rxjs/operators';
import {searchAction} from '../actions/actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {

  searchInput: FormControl;

  constructor(private store: Store<any>) {
    this.searchInput = new FormControl('');
    this.searchInput.valueChanges
      .pipe(
        debounceTime(1000),
        tap(value => console.log(`The user entered ${value}`)),
      )
      .subscribe(
        searchValue => {
          this.store.dispatch(searchAction({payload: {searchQuery: searchValue}}));
        },
      );
  }
}

import * as SearchActions from '../actions/actions';
import {Action, ActionReducer, createReducer, on} from '@ngrx/store';

export interface State {
  searchQuery: string;
  searchResults: string[];
}

const initialState: State = {
  searchQuery: '',
  searchResults: [],
};

const searchReducer = createReducer(
  initialState,
  on(
    SearchActions.searchAction,
    (state, {payload}) => ({
      ...state,
      searchQuery: payload.searchQuery,
      searchResults: [],
    })),
  on(
    SearchActions.searchSuccessAction,
    (state, {payload}) => ({
      ...state,
      searchResults: payload.searchResults,
    })),
);

export function reducer(state: State, action: Action): any{
  return searchReducer(state, action);
}

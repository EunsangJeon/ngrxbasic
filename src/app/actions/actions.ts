import {createAction, props} from '@ngrx/store';

export const SEARCH = '[Product] search';
export const SEARCH_SUCCESS = '[Product] search success';

export interface SearchPayload {
  searchQuery: string;
}
export interface SearchResultsPayload {
  searchResults: string[];
}

export const searchAction = createAction(
  SEARCH,
  props<{payload: SearchPayload}>()
);

export const searchSuccessAction = createAction(
  SEARCH_SUCCESS,
  props<{payload: SearchResultsPayload}>()
);

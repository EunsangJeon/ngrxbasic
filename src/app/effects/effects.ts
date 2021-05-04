import {Injectable} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {searchAction, searchSuccessAction} from '../actions/actions';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class SearchEffects {

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchAction),
      map((action) => action.payload),
      switchMap(({searchQuery}) => this.productService.getProducts(searchQuery)),
      map(searchResults => searchSuccessAction({payload: {searchResults}})),
    ),
  );

  constructor(private actions$: Actions, private productService: ProductService) {
  }
}

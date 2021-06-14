import { Action } from 'redux-actions';
import { ActionsObservable, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import { TableRowsActions } from './tableRows.actions';
import { getTableRows } from './tableRows.service';

export const getTableRows$ = (actions$: ActionsObservable<Action<void>>) =>
  actions$.pipe(
    ofType(TableRowsActions.GetTableRows),
    debounceTime(300),
    switchMap(() =>
      getTableRows().pipe(
        map((payload) => ({
          type: TableRowsActions.GetTableRowsSuccess,
          payload,
        })),
        catchError((err) =>
          of({
            type: TableRowsActions.GetTableRowsError,
            payload: err,
          }),
        ),
      ),
    ),
  );

export const updateTableRows$ = (actions$: ActionsObservable<Action<void>>) =>
  actions$.pipe(
    ofType(TableRowsActions.GetTableRows),
    debounceTime(300),
    switchMap(() =>
      getTableRows().pipe(
        map((payload) => ({
          type: TableRowsActions.GetTableRowsSuccess,
          payload,
        })),
        catchError((err) =>
          of({
            type: TableRowsActions.GetTableRowsError,
            payload: err,
          }),
        ),
      ),
    ),
  );

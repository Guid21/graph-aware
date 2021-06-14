import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { catchError } from 'rxjs/operators';
import { getTableRows$, updateTableRows$ } from './';
import { rootReducer } from './rootReducer';

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

epicMiddleware.run((action$, store$, dependencies) =>
  combineEpics(getTableRows$, updateTableRows$ as any)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    }),
  ),
);

export default store;

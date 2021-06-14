import { combineActions, handleActions } from 'redux-actions';
import { TableRowsActions } from './tableRows.actions';

export type TableRow = Readonly<{
  data: Record<string, string>;
  kids: Record<string, { records: TableRow[] }>;
}>;

export type TableRowState = Readonly<{
  data: TableRow[];
  isLoading?: boolean;
  isError?: boolean;
}>;

const initialState: TableRowState = {
  data: [],
  isLoading: false,
  isError: false,
};

const deleteRowFromState = (obj: any, path: string[]) => {
  if (!obj || !path || path.length === 0) return;
  if (path.length === 1) obj.splice(+path[0], 1);
  else deleteRowFromState(obj[path[0]], path.slice(1));
};

const pendingActions = combineActions(TableRowsActions.GetTableRows);

const errorActions = combineActions(TableRowsActions.GetTableRowsError);

const successActions = combineActions(TableRowsActions.GetTableRowsSuccess);

export default handleActions(
  {
    // -------------- PENDING --------------
    [pendingActions.toString()](state: TableRowState) {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    },
    // -------------- ERROR --------------
    [errorActions.toString()](state: TableRowState) {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    },
    // -------------- SUCCESS --------------
    [successActions.toString()](state: TableRowState, { payload: { data } }: { payload: { data: TableRow[] } }) {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data,
      };
    },
    [TableRowsActions.DeleteTableRows](state: TableRowState, { payload: { path } }: any) {
      const cloneState = JSON.parse(JSON.stringify(state.data));
      deleteRowFromState(cloneState, path.split('.'));

      return {
        ...state,
        isLoading: false,
        isError: false,
        data: cloneState,
      };
    },
  },
  initialState,
);

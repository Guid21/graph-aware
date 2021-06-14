import Axios from 'axios-observable';
import { map } from 'rxjs/operators';

export const getTableRows = () => {
  return Axios.request({
    method: 'GET',
    url: `${process.env.REACT_APP_END_POINT}table-rows`,
  }).pipe(map(({ data }) => ({ data })));
};

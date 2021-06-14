import { Table } from '@components';
import { TableRowsActions } from '@store';
import { State } from '@store/state';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const {
    tableRows: { data, isLoading },
  } = useSelector((state: State) => state);

  React.useEffect(() => {
    dispatch({ type: TableRowsActions.GetTableRows });
  }, [dispatch]);

  if (isLoading) return <div className={styles.App}>loading...</div>;

  return (
    <div className={styles.App}>
      <Table tableRows={data} />
    </div>
  );
};

export default App;

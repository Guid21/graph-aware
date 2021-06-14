import { TableRow } from '@store';
import React from 'react';
import Tbody from './components/Tbody';
import Thead from './components/Thead';
import styles from './Table.module.scss';
import { useTableHeaders, useTableRows } from './utils';

type TableProps = Readonly<{
  tableRows: TableRow[];
  caption?: string;
  path?: string;
}>;

const Table: React.FC<TableProps> = ({ tableRows: data, caption = 'DATA-1.json', path = '' }) => {
  const tableHeaders = useTableHeaders(data);
  const tableRows = useTableRows(data, tableHeaders);
  const colSpan = tableHeaders.length + 2;

  return (
    <table className={styles.Table}>
      <caption>{caption}</caption>
      <Thead tableHeaders={tableHeaders} />
      <Tbody tableRows={tableRows} colSpan={colSpan} path={path} />
    </table>
  );
};

export default Table;

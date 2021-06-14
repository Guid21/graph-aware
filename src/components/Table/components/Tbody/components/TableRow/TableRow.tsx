import Button from '@material-ui/core/Button';
import { ArrowBackIos, Close } from '@material-ui/icons';
import { TableRow as TableRowI, TableRowsActions } from '@store';
import cn from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Table } from '../../../../../';
import styles from './TableRow.module.scss';

type TableRowProps = Readonly<{
  data: string[];
  kids: Record<string, { records: TableRowI[] }>;
  colSpan: number;
  path?: string;
  index?: number;
}>;

const TableRow: React.FC<TableRowProps> = ({ data, kids, colSpan, path }) => {
  const dispatch = useDispatch();
  const [isShowTables, setIsShowTables] = React.useState(false);
  const handleShowTables = () => setIsShowTables((prev) => !prev);
  const handleDeleteTables = () => dispatch({ type: TableRowsActions.DeleteTableRows, payload: { path } });

  const tables = React.useMemo(
    () =>
      Object.keys(kids).map((key, index) => (
        <tr key={index}>
          <td colSpan={colSpan}>
            <Table tableRows={kids[key].records} caption={key} path={`${path}.kids.${key}.records`}></Table>
          </td>
        </tr>
      )),
    [kids, colSpan, path],
  );

  const showTableButton =
    tables.length > 0 ? (
      <Button className={styles.ShowTableButton} onClick={handleShowTables}>
        <ArrowBackIos className={cn(isShowTables ? styles.Active : styles.Arrow)} />
      </Button>
    ) : null;

  const deleteTableButton = (
    <Button className={styles.DeleteButton} onClick={handleDeleteTables}>
      <Close />
    </Button>
  );

  return (
    <>
      <tr className={styles.TableRow}>
        <td>{showTableButton}</td>
        {data.map((td, index) => (
          <td key={index}>{td}</td>
        ))}
        <td>{deleteTableButton}</td>
      </tr>
      {isShowTables && tables}
    </>
  );
};

export default TableRow;

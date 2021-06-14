import { TableRow as TableRowI } from '@store';
import React from 'react';
import TableRow from './components/TableRow';

type TbodyProps = Readonly<{
  tableRows: {
    data: string[];
    kids: Record<string, { records: TableRowI[] }>;
  }[];
  colSpan: number;
  path?: string;
}>;

const Tbody: React.FC<TbodyProps> = ({ tableRows, colSpan, path }) => {
  return (
    <tbody>
      {tableRows.map(({ data, kids }, index) => (
        <TableRow {...{ data, kids, colSpan, key: index, path: `${path}${path ? '.' : ''}${index}`, index }} />
      ))}
    </tbody>
  );
};

export default Tbody;

import { TableRow } from '@store';
import React from 'react';

export const useTableHeaders = (tableRows: TableRow[]) =>
  React.useMemo(
    () =>
      tableRows
        ?.reduce((acc, { data }) => [...acc, ...Object.keys(data)], [] as string[])
        .filter((tableHeader, index, self) => self.indexOf(tableHeader) === index),
    [tableRows],
  );

export const useTableRows = (tableRows: TableRow[], tableHeaders: string[]) => {
  return React.useMemo(
    () =>
      tableRows?.map(({ data, kids }) => ({
        data: tableHeaders.map((th) => data[th]),
        kids,
      })),
    [tableRows, tableHeaders],
  );
};

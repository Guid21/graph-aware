import React from 'react';

type TheadProps = Readonly<{
  tableHeaders: string[];
}>;

const Thead: React.FC<TheadProps> = ({ tableHeaders }) => {
  return (
    <thead>
      <tr>
        <th></th>
        {tableHeaders.map((th) => (
          <th key={th}>{th}</th>
        ))}
        <th></th>
      </tr>
    </thead>
  );
};

export default Thead;

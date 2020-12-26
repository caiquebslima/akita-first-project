import React from 'react';

export type FilterProps = {
  id: string;
  onChange: any;
  children?: React.ReactNode;
  tooltip?: string;
};

function Filter({ onChange, id }: FilterProps) {
  return <button onClick={() => onChange(id)}></button>;
}

export default Filter;

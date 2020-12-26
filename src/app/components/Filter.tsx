import React from 'react';

export type FilterProps = {
  id: string;
  onChange: any;
  children?: React.ReactNode;
  tooltip: string;
};

function Filter({ onChange, id, tooltip }: FilterProps) {
  return <button onClick={() => onChange(id)}>{tooltip}</button>;
}

export default Filter;

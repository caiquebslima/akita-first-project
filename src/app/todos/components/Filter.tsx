import React from 'react';

export type FilterProps = {
  id: string;
  onChange: any;
  children?: React.ReactNode;
  tooltip?: string;
};

function Filter({ children, onChange, id, tooltip }: FilterProps) {
  return <button onClick={() => onChange(id)}>{children}</button>;
}

export default Filter;

import React from 'react';
import Filter, { FilterProps } from './Filter';

type FiltersProps = {
  onChange: FilterProps['onChange'];
};

function Filters({ onChange }: FiltersProps) {
  return (
    <div>
      <Filter id='SHOW_ACTIVE' onChange={onChange}></Filter>
      <Filter id='SHOW_COMPLETED' onChange={onChange}></Filter>
      <Filter id='SHOW_ALL' onChange={onChange}></Filter>
    </div>
  );
}

export default Filters;

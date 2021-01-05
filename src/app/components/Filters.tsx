import React from 'react';
import Filter, { FilterProps } from './Filter';

type FiltersProps = {
  onChange: FilterProps['onChange'];
  active?: string;
};

function Filters({ onChange, active }: FiltersProps) {
  return (
    <div>
      <Filter
        id='SHOW_ACTIVE'
        onChange={onChange}
        tooltip={'Active'}
        active={active}
      ></Filter>
      <Filter
        id='SHOW_COMPLETED'
        onChange={onChange}
        tooltip={'Completed'}
        active={active}
      ></Filter>
      <Filter
        id='SHOW_ALL'
        onChange={onChange}
        tooltip={'All'}
        active={active}
      ></Filter>
    </div>
  );
}

export default Filters;

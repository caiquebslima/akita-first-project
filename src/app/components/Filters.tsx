import React from 'react';
import Filter, { FilterProps } from './Filter';

type FiltersProps = {
  onChange: FilterProps['onChange'];
};

function Filters({ onChange }: FiltersProps) {
  // const [active, setActive] = React.useState(false)
  return (
    <div>
      <Filter id='SHOW_ACTIVE' onChange={onChange} tooltip={'Active'}></Filter>
      <Filter
        id='SHOW_COMPLETED'
        onChange={onChange}
        tooltip={'Completed'}
      ></Filter>
      <Filter id='SHOW_ALL' onChange={onChange} tooltip={'All'}></Filter>
    </div>
  );
}

export default Filters;

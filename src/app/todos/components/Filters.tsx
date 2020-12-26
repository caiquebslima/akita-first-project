import React from 'react';
import Filter, { FilterProps } from './Filter';
import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

type FiltersProps = {
  onChange: FilterProps['onChange'];
};

function Filters({ onChange }: FiltersProps) {
  return (
    <Container>
      <Filter id='SHOW_ACTIVE' onChange={onChange} tooltip='Active'>
        <ClearIcon style={{ color: 'red' }} />
      </Filter>
      <Filter id='SHOW_COMPLETED' onChange={onChange} tooltip='Completed'>
        <DoneIcon style={{ color: 'green' }} />
      </Filter>
      <Filter id='SHOW_ALL' onChange={onChange} tooltip='All'>
        <AllInclusiveIcon style={{ color: 'blue' }} />
      </Filter>
    </Container>
  );
}

const Container = styled.div`
  height: 100px;
`;

export default Filters;

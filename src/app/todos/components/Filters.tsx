import React from 'react';
import Filter, { FilterProps } from './Filter';
import styled from 'styled-components';

type FiltersProps = {
  onChange: FilterProps['onChange'];
};

function Filters({ onChange }: FiltersProps) {
  return (
    <Container>
      <Filter id='SHOW_ACTIVE' onChange={onChange}></Filter>
      <Filter id='SHOW_COMPLETED' onChange={onChange}></Filter>
      <Filter id='SHOW_ALL' onChange={onChange}></Filter>
    </Container>
  );
}

const Container = styled.div`
  height: 100px;
`;

export default Filters;

import { Button } from '@material-ui/core';
import React from 'react';

export type FilterProps = {
  id: string | undefined;
  onChange: any;
  children?: React.ReactNode;
  tooltip: string;
  active?: string;
};

function Filter({ onChange, id, tooltip, active }: FilterProps) {
  return active === id ? (
    <Button
      variant='contained'
      color='primary'
      onClick={() => {
        onChange(id);
      }}
    >
      {tooltip}
    </Button>
  ) : (
    <Button
      variant='outlined'
      color='primary'
      onClick={() => {
        onChange(id);
      }}
    >
      {tooltip}
    </Button>
  );
}

export default Filter;

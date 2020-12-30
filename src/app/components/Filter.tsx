import { Button } from '@material-ui/core';
import React from 'react';

export type FilterProps = {
  id: string;
  onChange: any;
  children?: React.ReactNode;
  tooltip: string;
};

function Filter({ onChange, id, tooltip }: FilterProps) {
  return (
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

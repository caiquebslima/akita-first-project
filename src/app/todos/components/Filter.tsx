import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

export type FilterProps = {
  id: string;
  onChange: any;
  children: React.ReactNode;
  tooltip: string;
};

function Filter({ children, onChange, id, tooltip }: FilterProps) {
  return (
    <Tooltip title={tooltip}>
      <IconButton onClick={() => onChange(id)}>{children}</IconButton>
    </Tooltip>
  );
}

export default Filter;

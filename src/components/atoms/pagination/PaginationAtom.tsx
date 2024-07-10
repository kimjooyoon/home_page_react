import React from 'react';
import Pagination from '@mui/material/Pagination';
import {styled} from '@mui/material/styles';

const StyledPagination = styled(Pagination)(() => ({
  '& .MuiPaginationItem-root': {
    borderRadius: 4,
    margin: '0 4px',
  },
}));

export interface PaginationAtomProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  siblingCount?: number;
  boundaryCount?: number;
  variant?: 'text' | 'outlined';
  shape?: 'circular' | 'rounded';
}

const PaginationAtom: React.FC<PaginationAtomProps> =
  ({
     count,
     page,
     onChange,
     siblingCount = 1,
     boundaryCount = 1,
     variant = 'text',
     shape = 'rounded',
   }) => {
    return (
      <StyledPagination
        count={count}
        page={page}
        onChange={onChange}
        siblingCount={siblingCount}
        boundaryCount={boundaryCount}
        variant={variant}
        shape={shape}
      />
    );
  };

export default PaginationAtom;

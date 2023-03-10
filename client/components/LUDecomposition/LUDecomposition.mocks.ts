import { SetStateAction } from 'react';
import { ILUDecomposition } from './LUDecomposition';

const base: ILUDecomposition = {
  setMatrixData: function (value: SetStateAction<number[][]>): void {
    throw new Error('Function not implemented.');
  }
};

export const mockLUDecompositionProps = {
  base,
};

import { SetStateAction } from 'react';
import { ISuccess } from './Success';

const base: ISuccess = {
  message: '',
  setSuccess: function (value: SetStateAction<boolean>): void {
    throw new Error('Function not implemented.');
  },
};

export const mockSuccessProps = {
  base,
};

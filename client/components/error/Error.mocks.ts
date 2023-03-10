import { SetStateAction } from 'react';
import { IError } from './Error';

const base: IError = {
  error: '',
  setError: function (value: SetStateAction<string>): void {
    throw new Error('Function not implemented.');
  }
};

export const mockErrorProps = {
  base,
};

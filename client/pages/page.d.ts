/* eslint-disable no-unused-vars */

// Type File for NextPageWithLayout. Taken directly from NextJs docs
import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

// NextPageWithLayout allows the use of same components across multiple pages
// without causing a rerender every time
export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};

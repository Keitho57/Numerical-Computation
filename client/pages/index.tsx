import { useState } from 'react';

import LUDecomposition from '../components/LUDecomposition/LUDecomposition';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const [matrixData, setMatrixData] = useState<number[][]>([[]]);
  return (
    <div className="">
      <LUDecomposition setMatrixData={setMatrixData} />
    </div>
  );
};

export default Home;

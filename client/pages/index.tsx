import { useState } from 'react';
import DecToBase2 from '../components/DecToBase2/DecToBase2';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const [data, setData] = useState();
  const check = async () => {
    const res = await fetch('http://localhost:5001/symbol', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setData(await res.json());
  };

  const check2 = async () => {
    const res = await fetch('http://localhost:5001/dec_to_base2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ decNumber: 0.84375, decPlaces: 10 }),
    });
    setData(await res.json());
  };

  console.log(data);
  return (
    <div className='h-screen flex items-center justify-center'>
      <section className=''>
        <h1 className=''></h1>
      </section>
      <section className=''>
        <h1 className=''>Decimal to base 2</h1>
        <DecToBase2 />
      </section>
    </div>
  );
};

export default Home;

// // Swaps from one page to another that uses the same layout
// // without causing a rerender.
// Home.getLayout = (page) => {
//   return (
//     <PrimaryLayout>
//       <SidebarLayout />
//       {page}
//     </PrimaryLayout>
//   );
// };

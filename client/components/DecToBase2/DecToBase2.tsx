import { useState } from 'react';

import { postDecToBase2 } from '../../util/DecToBase2';

export interface IDecToBase2 {}

const DecToBase2: React.FC<IDecToBase2> = () => {
  const [decNumber, setDecNumber] = useState(0.0);
  const [decPlaces, setDecPlaces] = useState<number | undefined>();
  const [result, setResult] = useState<any>();

  const [error, setError] = useState(false);
  const handleSubmit = async () => {
    if (isNaN(decNumber)) return setError(true);
    setResult(await postDecToBase2(decNumber, decPlaces));
  };
  console.log(result);
  return (
    <div className="w-[60rem] h-[40rem] bg-sky-200 flex items-center justify-center flex-col">
      <div className="h-24 space-x-2">
        <input
          placeholder="Number to convert: "
          className="h-1/2 text-center focus:outline-none"
          onChange={(e) => setDecNumber(+e.target.value)}
        />
        <input
          placeholder="Decimal places: "
          className="h-1/2 text-center focus:outline-none"
          onChange={(e) => setDecPlaces(+e.target.value)}
        />
      </div>
      <button
        className="bg-sky-500 text-white rounded-md w-24 p-2 hover:bg-red-300"
        onClick={() => handleSubmit()}
      >
        SUBMIT
      </button>
      {result && <div className="bg-green-500">{result.result[0]}</div>}
      {error && (
        <div className="w-96 bg-red-300 border-2 border-red-400 rounded-sm p-2 text-white">
          Number to convert must be a number
        </div>
      )}
    </div>
  );
};

export default DecToBase2;

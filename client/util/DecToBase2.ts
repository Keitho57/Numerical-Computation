import { SERVER_ADDRESS } from "./constants";



export const postDecToBase2 = async (decNumber: number, decPlaces?: number) => {
  const res = await fetch(`${SERVER_ADDRESS}/dec_to_base2`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ decNumber, decPlaces }),
  });
  return (await res.json());
};

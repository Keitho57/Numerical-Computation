import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Transition } from '@headlessui/react';

import { ExclamationCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

export interface IError {
  error: string;
  setError: Dispatch<SetStateAction<string>>;
}

const Error: React.FC<IError> = ({ error, setError }) => {
  const [isOpen, setIsOpen] = useState(true);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const displaySuccess = async () => {
    await delay(2000);
    setIsOpen(false);
    setError('');
  };

  useEffect(() => {
    displaySuccess();
  }, []);

  return (
    <div className="fixed bottom-5 w-11/12 mx-10">
      <Transition
        appear
        show={isOpen}
        enter="transition-transform duration-700"
        enterFrom="translate-y-full"
        enterTo="translate-y-0"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="bg-red-200 border-red-300 border-2 rounded-md p-5 space-x-2 flex items-center justify-between font-bold text-neutral-700">
          <ExclamationCircleIcon className="w-8 mr-2 text-red-500" />
          {error}
          <XCircleIcon
            className="w-8 mr-2 text-red-500"
            onClick={() => {
              setError('');
              setIsOpen(false);
            }}
          />
        </div>
      </Transition>
    </div>
  );
};

export default Error;

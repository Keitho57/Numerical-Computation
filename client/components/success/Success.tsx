import { Transition } from '@headlessui/react';

import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export interface ISuccess {
  message: string;
  setSuccess: Dispatch<SetStateAction<boolean>>;
}

const Success: React.FC<ISuccess> = ({ message, setSuccess }) => {
  const [isOpen, setIsOpen] = useState(true);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const displaySuccess = async () => {
    await delay(2000);
    setIsOpen(false);
    setSuccess(false);
  };

  useEffect(() => {
    displaySuccess();
  }, []);

  return (
    <div className="fixed bottom-5 min-w-96 left-1/2 transform translate-x-[-50%] z-50">
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
        <div className="bg-green-200 border-green-300 border-2 rounded-md p-5 space-x-2 flex items-center justify-between font-bold text-neutral-700">
          <CheckCircleIcon className="w-8 mr-2 text-green-500" />
          {message}
        </div>
      </Transition>
    </div>
  );
};

export default Success;

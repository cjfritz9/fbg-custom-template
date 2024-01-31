'use client';

import React, { useEffect, useState } from 'react';
import { IoMdDownload } from 'react-icons/io';

const DevDisclaimerModal: React.FC = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const handleDownload = () => {
    const ICS_URL = 'FullBlastUSALaunchDayEvent.ics';
    const link = document.createElement('a');
    link.href = ICS_URL;
    link.download = '/public/FullBlastUSALaunchDayEvent.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('dev_disclaimer');

    if (hasSeenDisclaimer === 'true') {
      return;
    } else {
      //@ts-ignore
      document.getElementById('dev-disclaimer').showModal();
      localStorage.setItem('dev_disclaimer', 'true');
    }
  }, []);

  return (
    <>
      <dialog id='dev-disclaimer' className='modal'>
        <div className='modal-box text-primary'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h3 className='font-bold text-lg'>Welcome to Full Blast!</h3>
          <p className='py-4'>
            This website is currently under development and is being used for
            testing purposes only.
          </p>
          <p className='py-4'>
            Please join us when we enable purchases in February, 2024!
          </p>
          <span
            className='flex gap-2 text-md items-center cursor-pointer py-4 text-blue-600'
            onClick={handleDownload}
          >
            <p>Remind Me</p>
            <IoMdDownload />
          </span>
        </div>
      </dialog>
    </>
  );
};

export default DevDisclaimerModal;

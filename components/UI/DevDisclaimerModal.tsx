'use client';

import React, { useEffect } from 'react';

const DevDisclaimerModal: React.FC = () => {

  useEffect(() => {
    //@ts-ignore
    document.getElementById('dev-disclaimer').showModal()
  }, [])

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
          <p className='py-4'>This website is currently under development and is being used for testing purposes only.</p>
          <p className='py-4'>Please join us when the site goes live January 15th!</p>
        </div>
      </dialog>
    </>
  );
};

export default DevDisclaimerModal;

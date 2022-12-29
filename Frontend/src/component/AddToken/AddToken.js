import { padding } from '@mui/system';
import React, { useState } from 'react';
import { useMisc } from '../../context/Misc';

export const AddToken = () => {
  const { accessToken, handleAccessToken } = useMisc();
  const [inputVal, setInputVAl] = useState('');
  return (
    <div className="border-text-gray p-5 rounded border bg-white inline-block fixed top-[30%] left-[50%] z-50">
      <input
        type={'text'}
        placeholder="add token here"
        className="p-2.5 border border-text-gray rounded mb-[5px] font-semibold text-sm rounded-md"
        value={inputVal}
        onChange={(e) => {
          setInputVAl(e.target.value);
        }}
      />
      <br />
      <button
        className=" p-2.5 border bg-dark-orange text-white border-dark-orange font-semibold text-sm rounded-md"
        onClick={() => {
          console.log(inputVal);
          handleAccessToken(inputVal);
        }}
      >
        Add Token
      </button>
    </div>
  );
};

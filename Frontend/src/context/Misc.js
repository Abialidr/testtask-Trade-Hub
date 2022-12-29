import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { URL } from '../URL';

const MiscContext = createContext();

export const MiscProvider = ({ children }) => {
  const [myRfq, setMyRfq] = useState('Incoming');
  const [pageNumber, setPageNumber] = useState(0);
  const [accessToken, setaccessToken] = useState();

  const handleMyRfq = (data) => {
    setMyRfq(data);
  };

  const handleChangePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleAccessToken = (data) => {
    console.log(data);
    setaccessToken(data);
  };

  return (
    <MiscContext.Provider
      value={{
        myRfq,
        handleMyRfq,
        handleChangePage,
        pageNumber,
        handleAccessToken,
        accessToken,
      }}
    >
      <>{children}</>
    </MiscContext.Provider>
  );
};

export const useMisc = () => useContext(MiscContext);

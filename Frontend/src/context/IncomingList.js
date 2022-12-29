import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { URL } from '../URL';

const IncomingListContext = createContext();

export const IncomingListProvider = ({ children }) => {
  const [incomingList, setincomingList] = useState([]);

  const handleIncomingList = () => {
    axios
      .get(`${URL}/incoming`)
      .then((res) => {
        setincomingList([...res.data]);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <IncomingListContext.Provider value={{ incomingList, handleIncomingList }}>
      <>{children}</>
    </IncomingListContext.Provider>
  );
};

export const useIncomingList = () => useContext(IncomingListContext);

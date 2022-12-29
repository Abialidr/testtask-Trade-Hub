import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { URL } from '../URL';

const OutgoingListContext = createContext();

export const OutgoingListProvider = ({ children }) => {
  const [outgoingList, setoutgoingList] = useState([]);

  const handleOutgoingList = () => {
    axios
      .get(`${URL}/outgoing`)
      .then((res) => {
        setoutgoingList([...res.data]);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <OutgoingListContext.Provider value={{ outgoingList, handleOutgoingList }}>
      <>{children}</>
    </OutgoingListContext.Provider>
  );
};

export const useOutgoingList = () => useContext(OutgoingListContext);

import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { URL } from '../URL';

const MarketSearchContext = createContext();

export const MarketSearchProvider = ({ children }) => {
  const [market, setMarket] = useState([]);

  const handleMarket = () => {
    axios
      .get(`${URL}/search`)
      .then((res) => {
         setMarket([...res.data]);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <MarketSearchContext.Provider value={{ market, handleMarket }}>
      <>{children}</>
    </MarketSearchContext.Provider>
  );
};

export const useMarketSearch = () => useContext(MarketSearchContext);

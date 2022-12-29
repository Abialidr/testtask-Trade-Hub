import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const SubLeftBar = () => {
  const Navigate = useNavigate();
  const [selected, setSelected] = useState('rfqMarket');

  return (
    <>
      <div className="w-1/6 ">
        <div className="bg-white rounded-md border border-lightgray">
          <ul className="py-5">
            <li
              className="my-2"
              onClick={() => {
                setSelected('rfqMarket');
                Navigate(`RFQmarket`);
              }}
            >
              <div className="group flex py-2.5 px-5 transition-all duration-150 relative cursor-pointer">
                <div
                  className={`absolute group-hover:opacity-100 transition-all duration-150 left-0 w-[3px] h-[24px] rounded-tr-[15px] rounded-br-[15px] bg-dark-orange ${
                    selected === 'rfqMarket' ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>
                <img src="/assets/icons/home.svg" />
                <span
                  className={`ml-4 text-dark-gray font-normal leading-4.5 text-sm  ${
                    selected === 'rfqMarket' ? null : 'text-desable-text'
                  }`}
                >
                  RFQ's Market
                </span>
              </div>
            </li>
            <li
              className="my-2 "
              onClick={() => {
                setSelected('myRfq');
                Navigate(`MyRFQ`);
              }}
            >
              <div className="group flex py-2.5 px-5 transition-all duration-150 relative cursor-pointer">
                <div
                  className={`absolute group-hover:opacity-100 transition-all duration-150 left-0 w-[3px] h-[24px] rounded-tr-[15px] rounded-br-[15px] bg-dark-orange ${
                    selected === 'myRfq' ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>
                <img src="/assets/icons/downfile.svg" />
                <span
                  className={`ml-4 text-dark-gray font-normal leading-4.5 text-sm ${
                    selected === 'myRfq' ? null : 'text-desable-text'
                  }`}
                >
                  My RFQ’s
                </span>
              </div>
            </li>
            <li className="my-2 ">
              <div className="group flex py-2.5 px-5 transition-all duration-150 relative cursor-pointer">
                <div className="absolute group-hover:opacity-100 opacity-0 transition-all duration-150 left-0 w-[3px] h-[24px] rounded-tr-[15px] rounded-br-[15px] bg-dark-orange"></div>
                <img src="/assets/icons/upfile.svg" />
                <span className="ml-4 text-dark-gray font-normal leading-4.5 text-sm text-desable-text">
                  My Quotations
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SubLeftBar;

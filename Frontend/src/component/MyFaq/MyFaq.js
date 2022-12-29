import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';
// import { borderRadius } from '@mui/system'
import { makeStyles } from '@mui/styles';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Outlet, useNavigate } from 'react-router-dom';
import { useIncomingList } from '../../context/IncomingList';
import { useOutgoingList } from '../../context/OutgoingList ';
import { useMisc } from '../../context/Misc';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const useStyles = makeStyles({
  select: {
    '&:before': {
      borderColor: 'white',
    },
    '&:after': {
      borderColor: 'white',
    },
    '&:not(.Mui-disabled):hover::before': {
      borderColor: 'white',
    },
  },
  icon: {
    fill: 'white',
  },
  root: {
    color: 'white',
  },
});

const MyFaq = () => {
  const { myRfq, handleMyRfq } = useMisc();
  const classes = useStyles();
  const navigate = useNavigate();
  const { incomingList } = useIncomingList();
  const { outgoingList } = useOutgoingList();

  useEffect(() => {
    if (myRfq === 'Outgoing') {
      navigate('/MyRFQ/Outgoing');
    }
  }, []);
  const tabs = [
    {
      name: 'Incoming',
      href: '#',
      totle: incomingList.length,
      current: myRfq === 'Incoming' ? true : false,
    },
    {
      name: 'Outgoing',
      href: '#',
      totle: outgoingList.length,
      current: myRfq === 'Outgoing' ? true : false,
    },
  ];
  return (
    <div className="w-5/6 bg-white border border-lightgray rounded-md min-h-[69vh] flex  flex-col ">
      <div className="header p-7.5 border-b border-lightgray flex justify-between">
        <div className="flex">
          <h2 className="text-black text-lg font-bold font-Montserrat">
            RFQs market
          </h2>
        </div>
        <div className="flex ">
          <div className="relative w-[360px] mr-2.5">
            <div className="w-full  ">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 text-text-gray"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full rounded-md border border-lightgray bg-white py-2 pr-10 pl-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
          <button className=" px-2.5 py-2.5  rounded-md ">
            <img src="/assets/icons/download.svg" />
          </button>
        </div>
      </div>
      <div className=" border-b border-lightgray flex justify-between pr-[25px]">
        <div className="">
          <nav className="-mb-px flex " aria-label="Tabs">
            {tabs.map((tab, index) => (
              <a
                key={index}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? 'border-dark-orange ml-px text-dark-gray font-semibold border-b-2'
                    : 'border-transparent text-defult-gray hover:text-dark-gray font-normal leading-4.5 hover:border-dark-orange hover:border-b-2',
                  'whitespace-nowrap flex  px-1  px-5  py-[30px]  text-sm '
                )}
                aria-current={tab.current ? 'page' : undefined}
                onClick={() => {
                  navigate(tab.name);
                  handleMyRfq(tab.name);
                }}
              >
                {tab.name}
                <span className="ml-1.5 bg-bggray flex items-center justify-center w-[31px] h-5 rounded-[5px] text-desable-text text-xs px-1.5 py-[5px] font-medium">
                  {tab.totle}
                </span>
              </a>
            ))}
          </nav>
        </div>
        <div className=" flex items-center status-select">
          <span className="mr-2.5 font-normal text-sm text-desable-text">
            Filter by
          </span>
          <FormControl sx={{ minWidth: 240, height: 40, borderRadius: '5px' }}>
            <Select
              //   value={age}
              //   onChange={handleChange}

              MenuProps={{ classes: { paper: classes.paper } }}
              sx={{ height: 40, borderRadius: '5px' }}
            >
              <MenuItem
                className="menuselect"
                value={60}
                sx={{ padding: '12px 14px' }}
              >
                <span className="bg-dark-orange mr-2.5  rounded-full w-[15px] h-[15px]"></span>
                <span>All statuses</span>
              </MenuItem>
              <MenuItem
                className="menuselect"
                value={10}
                sx={{ padding: '12px 14px' }}
              >
                <span className="bg-custom-yellow mr-2.5 rounded-full w-[15px] h-[15px]"></span>
                <span>New</span>
              </MenuItem>
              <MenuItem
                className="menuselect"
                value={20}
                sx={{ padding: '12px 14px' }}
              >
                <span className="bg-custom-blue mr-2.5 rounded-full w-[15px] h-[15px]"></span>
                <span>Opened</span>
              </MenuItem>
              <MenuItem
                className="menuselect"
                value={30}
                sx={{ padding: '12px 14px' }}
              >
                <span className="bg-custom-green mr-2.5 rounded-full w-[15px] h-[15px]"></span>
                <span>Quoted</span>
              </MenuItem>
              <MenuItem
                className="menuselect"
                value={40}
                sx={{ padding: '12px 14px' }}
              >
                <span className="bg-custom-red mr-2.5 rounded-full w-[15px] h-[15px]"></span>
                <span>Expired</span>
              </MenuItem>
              <MenuItem
                className="menuselect"
                value={50}
                sx={{ padding: '12px 14px' }}
              >
                <span className="bg-custom-gray mr-2.5 rounded-full w-[15px] h-[15px]"></span>
                <span>Closed</span>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <Outlet />
      {/* <OutgoingTable /> */}

      {/* <div className="flex justify-end mt-auto pb-[42px] pt-[30px]  gap-x-2.5  px-[27px]">
        <button className="inline-flex w-[40px] h-[40px] items-center rounded-md border border-text-gray bg-white px-2 py-2 text-sm font-medium text-gray-500 ">
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button className="inline-flex w-[40px] bg-dark-orange h-[40px]  justify-center items-center rounded-md border text-white border-dark-orange bg-white px-2 py-2 text-sm font-medium text-gray-500 ">
          <span>1</span>
        </button>
        <button className="inline-flex w-[40px] h-[40px]  justify-center items-center rounded-md border  border-text-gray text-dark-gray    px-2 py-2 text-sm font-medium text-gray-500 ">
          <span>2</span>
        </button>
        <button className="inline-flex w-[40px] h-[40px]  justify-center items-center rounded-md border  border-text-gray text-dark-gray    px-2 py-2 text-sm font-medium text-gray-500 ">
          <span>3</span>
        </button>
        <button className="inline-flex w-[40px] h-[40px]  justify-center items-center rounded-md border  border-text-gray text-dark-gray    px-2 py-2 text-sm font-medium text-gray-500 ">
          <span>4</span>
        </button>
        <button className="inline-flex w-[40px] h-[40px]  justify-center items-center rounded-md border  border-text-gray text-dark-gray    px-2 py-2 text-sm font-medium text-gray-500 ">
          <span>5</span>
        </button>
        <input
          placeholder="Page #"
          className="inline-flex w-[70px] h-[40px]  justify-center items-center rounded-md border  border-text-gray text-dark-gray    px-2 py-2 text-sm font-medium text-gray-500 "
        />
        <button className="inline-flex items-center rounded-md border border-text-gray bg-white px-2 py-2 text-sm font-medium text-gray-500 ">
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div> */}
    </div>
  );
};

export default MyFaq;

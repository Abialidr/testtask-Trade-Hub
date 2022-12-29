import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import DatePicker from 'sassy-datepicker';
import './faqmarket.scss';
import moment from 'moment/moment';
import { useMarketSearch } from '../../context/MarketSearch';
import { Market } from './Market';
const FaqMarket = () => {
  const { market } = useMarketSearch();

  const [opneModal, setOpneModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [filteredArray, setFilteredArray] = useState(null);
  const togglePicker = () => setVisible((v) => !v);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState({
    rfqType: '',
    deleveryTerms: '',
    dueDate: '',
    priceFrom: '',
    priceTo: '',
  });

  const handleFilter = (key, data) => setInput({ ...input, [key]: data });
  const handleFilteredArray = () => {
    const newArray = market.filter((data, ind) => {
      let rt = true,
        dt = true,
        dd = true,
        pf = true,
        pt = true;

      input.rfqType !== '' && (rt = 'data.type === input.rfqType');

      input.deleveryTerms !== '' &&
        (dt = 'data.deliveryTerms === input.deleveryTerms');

      //input.dueDate !== '' ? (dd = 'data.expireDate === input.dueDate') : (dd = true);

      if (input.priceFrom !== '' && input.priceTo !== '') {
        if (data.products.length > 0) {
          data.products.map((item, index) => {
            if (
              item.targetPrice >= parseInt(input.priceFrom) &&
              item.targetPrice <= parseInt(input.priceTo)
            ) {
              pt = `data.products[${index}].targetPrice <= parseInt(input.priceTo)`;
              pf = `data.products[${index}].targetPrice >= parseInt(input.priceFrom)`;
            } else {
              if (pf === true) pf = false;
              if (pt === true) pt = false;
            }
          });
        } else {
          pf = false;
          pt = false;
        }
      }

      console.log(pf, ' ', pt);
      return eval(rt) && eval(dt) && eval(dd) && eval(pf) && eval(pt);
    });
    setFilteredArray([...newArray]);
  };

  return (
    <div className="w-5/6 bg-white border border-lightgray rounded-md">
      <div className="header p-7.5   border-lightgray flex justify-between">
        <div className="flex items-center">
          <h2 className="text-black text-lg font-bold font-Montserrat">
            RFQs market
          </h2>
          <div className="flex ml-[62px]">
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
            <div className="relative ">
              <button
                onClick={() => {
                  opneModal === true ? setOpneModal(false) : setOpneModal(true);
                }}
                className="flex items-center cursor-pointer border border-lightgray px-[13px] py-[9px] rounded-md"
              >
                <img
                  src="assets/icons/filter.svg"
                  alt="icon"
                  className="mr-2.5"
                />
                <span className="text-defult-gray text-sm font-semibold">
                  Filter
                </span>
              </button>
              {opneModal && (
                <div className="bg-white shadow-lg rounded-md -left-[104px] absolute w-[296px] px-2 py-3">
                  <div className="rounded-md bg-white mb-2.5">
                    <select
                      id="RFQtype"
                      name="RFQ type"
                      className="block w-full rounded-md bg-white border   border-lightgray py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) => {
                        handleFilter('rfqType', e.target.value);
                      }}
                      value={input.rfqType}
                    >
                      <option value="">RFQ type</option>
                      <option value="Service">Service</option>
                      <option value="Product">Product</option>
                    </select>
                  </div>
                  <div className="rounded-md bg-white mb-2.5">
                    <select
                      id="Deliveryterms"
                      name="Delivery terms"
                      className="block w-full rounded-md bg-white border   border-lightgray py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) => {
                        handleFilter('deleveryTerms', e.target.value);
                      }}
                      value={input.deleveryTerms}
                    >
                      <option value={''}>Delivery terms</option>
                      <option value={'EXW'}>EXW</option>
                      <option value={'FCA'}>FCA</option>
                      <option value={'FAS'}>FAS</option>
                      <option value={'FOB'}>FOB</option>
                      <option value={'CFR'}>CFR</option>
                      <option value={'CIF'}>CIF</option>
                      <option value={'CBT'}>CBT</option>
                      <option value={'CIP'}>CIP</option>
                      <option value={'DAT'}>DAT</option>
                      <option value={'BAP'}>BAP</option>
                      <option value={'DTP'}>DTP</option>
                    </select>
                  </div>
                  <div onClick={togglePicker} className="relative mb-2.5">
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center pl-3">
                      <img src="assets/icons/date.svg" />
                    </div>
                    <input
                      className="block w-full rounded-md border border-lightgray bg-white py-2 pr-10 pl-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Due date"
                      type="search"
                      defaultValue={
                        input.dueDate != ''
                          ? moment(input.dueDate).format('MMM Do YYYY')
                          : null
                      }
                    />
                    {visible ? (
                      <DatePicker
                        weekStartsFrom="Monday"
                        className="absolute mt-2 z-50"
                        onChange={(data) => {
                          console.log(data);
                          handleFilter('dueDate', data);
                        }}
                      />
                    ) : null}
                  </div>
                  <div className="flex gap-2.5 mb-2.5">
                    <input
                      id="search"
                      name="search"
                      className="block w-1/2 rounded-md border border-lightgray bg-white py-2  px-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Price from"
                      type="search"
                      onChange={(e) => {
                        handleFilter('priceFrom', e.target.value);
                      }}
                      value={input.priceFrom}
                    />
                    <input
                      id="search"
                      name="search"
                      className="block w-1/2 rounded-md border border-lightgray bg-white py-2  px-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Price to"
                      type="search"
                      onChange={(e) => {
                        handleFilter('priceTo', e.target.value);
                      }}
                      value={input.priceTo}
                    />
                  </div>
                  <div className="text-end ">
                    <button
                      className="text-dark-gray px-7.5 py-2.5  text-sm  font-normal"
                      onClick={() => {
                        setInput({
                          rfqType: '',
                          deleveryTerms: '',
                          dueDate: '',
                          priceFrom: '',
                          priceTo: '',
                        });
                        setPage(1);
                        setFilteredArray(null);
                        setOpneModal(false);
                      }}
                    >
                      Clear all
                    </button>
                    <button
                      className="text-white bg-dark-orange px-7.5 py-2.5  text-sm rounded-md font-semibold"
                      onClick={() => {
                        handleFilteredArray();
                      }}
                    >
                      {' '}
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <button className="text-white bg-dark-orange px-7.5 py-2.5  text-sm rounded-md font-semibold">
            Create RFQ
          </button>
        </div>
      </div>
      {filteredArray != null
        ? filteredArray.slice(0, page * 5).map((data, index) => {
            return <Market Property={data} key={index} />;
          })
        : market.slice(0, page * 5).map((data, index) => {
            return <Market Property={data} key={index} />;
          })}
      <div className="flex justify-center  py-5">
        <button
          className="border text-defult-gray font-semibold border-lightgray px-[37px] py-[11px] rounded-md"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default FaqMarket;

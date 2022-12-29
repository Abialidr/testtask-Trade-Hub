import React, { useEffect, useState } from 'react';
import { useMisc } from '../../../context/Misc';
import queryString from 'query-string';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL2 } from '../../../URL';
import { AddToken } from '../../AddToken/AddToken';

const IncomingDetail = () => {
  const [rfqDetails, setRfqDetails] = useState();
  const navigate = useNavigate();
  const [token, setToken] = useState(false);
  const { accessToken } = useMisc();
  useEffect(() => {
    let queries = queryString.parse(window.location.search);
    axios
      .get(`${URL2}/api/v0.3/companies/rfqs/one/${queries.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'event-id': `628dc91a28b98807713606f0`,
        },
      })
      .then((res) => {
        setToken(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err.response.status);
        if (err.response.status === 401) {
          setToken(true);
        } else {
          setToken(false);
        }
      });
  }, [accessToken]);
  return (
    <>
      <div className="w-5/6 min-h-[69vh]">
        <div className="bg-white border border-lightgray rounded-md flex  flex-col">
          <div className="header py-7.5 px-[26px] border-b border-lightgray flex justify-between">
            <div className="flex items-center">
              <button
                className="inline-flex w-[40px] h-[40px] items-center mr-2 rounded-md border border-text-gray bg-white px-2 py-2 text-sm font-medium text-gray-500 "
                onClick={() => {
                  navigate(-1);
                }}
              >
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <h2 className="text-black text-base font-semibold text-dark-gray font-Montserrat">
                Big range of the earphones and headphones
              </h2>
              <span className=" text-[10px] ml-5 font-medium py-px px-[5px] rounded  text-white w-[60px] flex justify-center items-center h-[20px] bg-custom-yellow">
                Pending
              </span>
            </div>
            <div className="flex ">
              <button className=" px-2.5 py-2.5  rounded-md ">
                <img src="assets/icons/download.svg" />
              </button>
              <button className=" px-2.5 py-2.5 mr-2.5  rounded-md ">
                <img src="assets/icons/print.svg" />
              </button>
              <button className="  py-2.5 w-32 border border-text-gray font-semibold text-sm text-dark-gray rounded-md mr-5 ">
                Decline
              </button>
              <button className="  py-2.5 w-32 border bg-dark-orange text-white border-dark-orange font-semibold text-sm rounded-md ">
                Send a quote
              </button>
            </div>
          </div>
          <div>
            <div className="px-[26px] pt-5 pb-10">
              <div className="flex  justify-between">
                <div className="flex gap-[60px] ">
                  <div>
                    <span className="font-normal text-sm leading-4.5 text-desable-text">
                      Company
                    </span>
                    <div className="flex mt-2.5">
                      <div className="mr-2.5">
                        <img
                          src="assets/company.png"
                          className="w-[40px] h-[40px] rounded-full"
                        />
                      </div>
                      <div className="grid items-center">
                        <h6 className=" text-custom-blue underline font-semibold text-lg ">
                          FactoryX llc
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="font-normal text-sm leading-4.5 text-desable-text">
                      RFQ owner
                    </span>
                    <div className="flex mt-2.5">
                      <div className="mr-2.5">
                        <img
                          src="assets/faqimg.png"
                          className="w-[40px] h-[40px] rounded-full"
                        />
                      </div>
                      <div className="grid">
                        <h6 className=" text-custom-blue leading-[22px] font-semibold text-lg">
                          Max Grumpsky
                        </h6>
                        <span className="font-light text-sm text-dark-gray">
                          Director of Digital Department
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-7.5">
                <div className="flex mb-5">
                  <span className="font-normal text-sm leading-4.5 text-desable-text mr-5">
                    Issued date:<span className="font-medium">24 Aug 2022</span>{' '}
                  </span>
                  <span className="font-normal text-sm leading-4.5 text-desable-text">
                    Expire date:{' '}
                    <span className="font-medium">31 Sept 2022</span>
                  </span>
                </div>
                <p className="font-normal text-sm text-dark-gray leading-4.5">
                  We demand services dolor sit amet, consectetur adipiscing
                  elit. Odio malesuada massa id orci, nunc. Orci nulla dolor
                  elementum sagittis sit tortor, sed in. Maecenas porttitor
                  quisque aenean neque ut sed tristique. Donec sit ut amet
                  interdum porttitor. Massa vel pretium ut velit in elementum
                  sed nam. Semper aliquet mattis feugiat sed. Sit viverra donec
                  ultricies morbi curabitur malesuada. Aliquam nulla ac elit id.
                  Vitae nibh rhoncus odio eu scelerisque ut sed lectus et.
                </p>
              </div>
              <div className="flex rounded-md mt-7.5 border relative border-lightgray p-2.5">
                <div className="w-40 h-40 relative">
                  <button className="inline-flex absolute top-2/4 w-[30px] h-[30px] items-center rounded-md border border-text-gray bg-white px-2 py-2 text-sm font-medium text-gray-500 ">
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <img src="assets/earbuds.png" />
                  <button className="inline-flex absolute top-2/4 right-0 w-[30px] h-[30px]  items-center rounded-md border border-text-gray bg-white px-2 py-2 text-sm font-medium text-gray-500 ">
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                <div className="py-2.5">
                  <div className="flex gap-[30px] mb-5">
                    <span className="font-normal text-xs leading-4.5 text-desable-text ">
                      Brand: Sony{' '}
                    </span>
                    <span className="font-normal text-xs leading-4.5 text-desable-text">
                      Expire date:{' '}
                      <span className="font-medium">31 Sept 2022</span>
                    </span>
                  </div>
                  <h2 className="text-black text-base font-semibold text-dark-gray font-Montserrat">
                    Sony WF-1000XM4 Industry Leading Noise Cancelling Truly
                    Wireless Earbuds
                  </h2>
                </div>
                <button className="border-t border-l rounded-tl-md absolute right-0 bottom-0 border-lightgray">
                  <div className="relative  pl-3.5 pr-7.5 py-1.5">
                    <span>Learn more</span>
                    <img
                      className="absolute right-2.5 top-3.5"
                      src="assets/icons/Right-Solid.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="rounded-md fixed ease-in-out transition duration-1000  bottom-7.5 right-7.5 notification-bar py-5 px-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon className="h-5 w-5 text-link" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-dark-gray">The RFQ has been declined</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-0  focus:ring-offset-0 "
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5  text-[#93A3BB] "   aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div> */}
      {/*token === true ? <AddToken /> : null*/}
    </>
  );
};

export default IncomingDetail;

import React, { useEffect, useState } from 'react';
import { useMisc } from '../../../context/Misc';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import axios from 'axios';
import { URL2, AccessToken } from '../../../URL';
import queryString from 'query-string';
import { useNavigate } from 'react-router-dom';
import { AddToken } from '../../AddToken/AddToken';

const tabs = [
  { name: 'RFQ details', href: '#', current: true },
  { name: 'Invite suppliers', href: '#', current: false },
  { name: 'Proposals', href: '#', current: false },
  { name: 'Purchasing order', href: '#', current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const OutgoingDetailClose = () => {
  const navigate = useNavigate('/MyRFQ/Outgoing');
  const { accessToken } = useMisc();
  const [token, setToken] = useState(false);

  useEffect(() => {
    let queries = queryString.parse(window.location.search);
    let queriesa = queryString.parse(window.location.search);

    axios
      .get(`${URL2}/api/v0.3/companies/rfqs/one/${queries.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'event-id': `628dc91a28b98807713606f0`,
        },
      })
      .then((res) => {
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
              <button className="  py-2.5 w-32 border border-text-gray font-semibold text-sm text-dark-gray rounded-md ">
                Close RFQ
              </button>
              {/* <button className='  py-2.5 w-32 bg-[#F5F9FF] font-semibold text-sm text-dark-gray rounded-md '>Close</button> */}
            </div>
          </div>
          <div className=" border-b border-lightgray flex justify-between pr-[25px]">
            <div className="">
              <nav className="-mb-px flex " aria-label="Tabs">
                {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className={classNames(
                      tab.current
                        ? 'border-dark-orange ml-px text-dark-gray font-semibold border-b'
                        : 'border-transparent text-defult-gray hover:text-dark-gray font-normal leading-4.5 hover:border-dark-orange hover:border-b-2',
                      'whitespace-nowrap flex  px-1  px-5  py-4 text-sm '
                    )}
                    aria-current={tab.current ? 'page' : undefined}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div>
            <div className="px-[26px] pt-5 pb-10">
              <div className="flex  justify-between">
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
              <div className="mt-7.5">
                <div className="flex mb-5">
                  <span className="font-normal text-sm leading-4.5 text-desable-text mr-5">
                    Issued date:<span className="font-medium">24 Aug 2022</span>{' '}
                  </span>
                  <span className="font-normal text-sm leading-4.5 text-dark-gray">
                    Expire date:{' '}
                    <span className="font-medium ">31 Sept 2022</span>
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
              <div className="mt-5">
                <span className="font-normal text-desable-text text-sm">
                  Copy link
                </span>
                <div className="relative max-w-[590px] mt-2.5">
                  <button className=" z-10 absolute inset-y-0 right-3 flex items-center pl-3">
                    <img
                      src="assets/icons/copy.svg "
                      className="mr-[7.25px]"
                      alt="copy"
                    />
                    <span className=" text-defult-gray font-medium text-sm">
                      Copy
                    </span>
                  </button>
                  <input
                    id="search"
                    name="search"
                    className="block w-full rounded-md border border-lightgray bg-white py-2 pr-[4.5rem] pl-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    placeholder="url:sarahassan.momentum.aladdinb2b.com"
                    type="search"
                    disabled={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md fixed ease-in-out transition duration-1000  bottom-0 right-0 notification-bar py-5 px-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <InformationCircleIcon
              className="h-5 w-5 text-link"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-dark-gray">
              The RFQ has been declined
            </p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-0  focus:ring-offset-0 "
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon
                  className="h-5 w-5  text-[#93A3BB] "
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*token === true ? <AddToken /> : null*/}

    </>
  );
};

export default OutgoingDetailClose;

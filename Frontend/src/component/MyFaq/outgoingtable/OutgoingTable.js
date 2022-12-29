import React, { useEffect, useState } from 'react';
import { useOutgoingList } from '../../../context/OutgoingList ';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const OutgoingTable = () => {
  const [opneModal, setOpneModal] = useState(null);
  const { handleOutgoingList, outgoingList } = useOutgoingList();
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pageVisited = pageNumber * usersPerPage;
  const displayUsers = outgoingList.slice(
    pageVisited,
    pageVisited + usersPerPage
  );
  const pageCount = Math.ceil(outgoingList.length / usersPerPage);
  console.log(
    '🚀  file: OutgoingTable.js  line 14  OutgoingTable  pageCount',
    pageCount
  );
  const handleChangePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div className="h-full overflow-x-auto relative">
        <table className=" pl-8">
          <thead>
            <tr className="h-[41px] border-b border-text-gray ">
              <th className="min-w-[170px] pl-8 text-left font-medium text-sm text-dark-gray relative">
                <span>RFQ title</span>{' '}
                <span className="right-4 top-3.5 absolute">
                  <img src="/assets/icons/upDown.svg"></img>
                </span>
              </th>
              <th className="min-w-[164px] text-left font-medium text-sm text-dark-gray relative">
                Company{' '}
                <span className="right-4 top-3.5 absolute">
                  <img src="/assets/icons/upDown.svg"></img>
                </span>
              </th>
              <th className="min-w-[172px] text-left font-medium text-sm text-dark-gray relative">
                Quote amount{' '}
                <span className="right-4 top-3.5 absolute">
                  <img src="/assets/icons/upDown.svg"></img>
                </span>
              </th>
              <th className="min-w-[174px] text-left font-medium text-sm text-dark-gray relative">
                RFQs owner{' '}
                <span className="right-4 top-3.5 absolute">
                  <img src="/assets/icons/upDown.svg"></img>
                </span>
              </th>
              <th className="min-w-[169px] text-left font-medium text-sm text-dark-gray relative">
                Date created{' '}
                <span className="right-4 top-3.5 absolute">
                  <img src="/assets/icons/upDown.svg"></img>
                </span>
              </th>
              <th className="min-w-[217px] text-left font-medium text-sm text-dark-gray relative">
                Due date{' '}
                <span className="right-4 top-3.5 absolute">
                  <img src="/assets/icons/upDown.svg"></img>
                </span>
              </th>
              <th className="min-w-[203px] text-left font-medium text-sm text-dark-gray relative">
                Status{' '}
                <span className="right-4 top-3.5 absolute">
                  {/* <img src="assets/icons/upDown.svg"></img> */}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {displayUsers.map((data, i) => {
              const dateCreated = moment(data.dateCreated).format('l');
              const dueDate = moment(data.expireDate).format('l');
              return (
                <tr
                  className="h-[60px] table-popup"
                  key={i}
                  onClick={() => {
                    navigate(`/OutgoingView?id=${data._id}`);
                  }}
                >
                  <td className="font-medium pl-8 text-sm text-dark-gray">
                    {data.title}
                  </td>
                  <td className="font-medium pl-8 text-sm text-dark-gray">
                    {data.company.name}
                  </td>
                  <td className="font-normal text-sm text-dark-gray">
                    {data.totalAmount}
                  </td>
                  <td className="font-normal text-sm text-dark-gray">
                    {data.createdByContact.firstname}{' '}
                    {data.createdByContact.lastname}
                  </td>
                  <td className="font-normal text-sm text-dark-gray">
                    {dateCreated}
                  </td>
                  <td className="font-normal text-sm text-dark-gray">
                    {dueDate}
                  </td>
                  <td className="font-normal text-sm text-dark-gray">
                    {data.status}
                  </td>
                  <td
                    className="font-normal text-sm text-dark-gray cursor-pointer pl-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      opneModal === i ? setOpneModal(null) : setOpneModal(i);
                    }}
                  >
                    <div className="flex text-center items-center">
                      <img src="/assets/icons/Showmore.svg" />
                      <div className="ml-auto  mr-14 cursor-pointer select-none relative">
                        {opneModal === i && (
                          <div className="modal py-[6px] popup-main  -right-10 absolute w-[192px] bg-white shadow-lg">
                            <ul>
                              <li className="flex px-[16px]  hover:bg-bggray py-[12px]">
                                <img
                                  src="/assets/icons/replay.svg"
                                  className="mr-2.5"
                                />
                                <span>Replay</span>
                              </li>
                              <li className="flex px-[16px]  hover:bg-bggray py-[12px]">
                                <img
                                  src="/assets/icons/close.svg"
                                  className="mr-2.5"
                                />
                                <span>Decline</span>
                              </li>
                              <li className="flex px-[16px] hover:bg-bggray py-[12px]">
                                <img
                                  src="/assets/icons/download.svg"
                                  className="mr-2.5"
                                />
                                <span>Download</span>
                              </li>
                              <li className="flex px-[16px]  hover:bg-bggray py-[12px]">
                                <img
                                  src="/assets/icons/print.svg"
                                  className="mr-2.5"
                                />
                                <span>Print</span>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        previousLabel={
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        }
        nextLabel={<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />}
        pageCount={pageCount}
        onPageChange={handleChangePage}
        activeClassName={
          'inline-flex w-[40px] bg-dark-orange h-[40px]  justify-center items-center rounded-md border text-white border-dark-orange bg-white px-2 py-2 text-sm font-medium text-gray-500 '
        }
        className={
          'flex justify-end mt-auto pb-[42px] pt-[30px]  gap-x-2.5  px-[27px]'
        }
        previousClassName="inline-flex w-[40px] h-[40px] items-center rounded-md border border-text-gray bg-white px-2 py-2 text-sm font-medium text-gray-500 "
        nextClassName="inline-flex w-[40px] h-[40px] items-center rounded-md border border-text-gray bg-white px-2 py-2 text-sm font-medium text-gray-500 "
        pageClassName="inline-flex w-[40px] h-[40px]  justify-center items-center rounded-md border  border-text-gray text-dark-gray    px-2 py-2 text-sm font-medium text-gray-500 "
      />
    </>
  );
};

export default OutgoingTable;

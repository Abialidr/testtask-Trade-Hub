import React from 'react';

export const Market = ({ Property }) => {
  return (
    <div className="p-7.5 border-t border-text-gray">
      <div className="flex gap-5">
        <div className="">
          <img
            src="assets/faqimg.png"
            className="w-[79px] h-[79px] rounded-full"
          />
        </div>
        <div className="flex-1">
          <div className="flex  justify-between">
            <div className="flex ">
              <div className="mr-10 flex items-center">
                <h6 className="font-medium text-sm text-dark-gray leading-4.5">
                  {Property.company.name}
                </h6>
              </div>
              <div>
                <div className="flex">
                  <div className="mr-2.5">
                    <img
                      src="assets/faqimg.png"
                      className="w-[30px] h-[30px] rounded-full"
                    />
                  </div>
                  <div className="grid">
                    <h6 className="font-normal text-dark-gray text-sm leading-4.5">
                      Max Grumpsky
                    </h6>
                    <span className="font-light text-xs text-dark-gray">
                      Director of Digital Department
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="border border-dark-orange rounded-md font-semibold text-defult-gray px-10 py-1.5 text-sm leading-4.5">
                Send a quote{' '}
              </button>
            </div>
          </div>
          <div className="">
            <h2 className="text-black py-4 text-lg font-bold font-Montserrat">
              {Property.description}
            </h2>
          </div>
          {Property.products.map((data, index, Array) => {
            return (
              <React.Fragment key={index}>
                <p className="font-normal text-sm text-dark-gray leading-4.5">
                  {data.product.description}
                </p>
                <div className="flex gap-2.5 my-5">
                  <img src="assets/faqimg1.png" />
                  <img src="assets/faqimg4.png" />

                  <img src="assets/faqimg5.png" />

                  <img src="assets/faqimg3.png" />

                  <img src="assets/faqimg2.png" />
                </div>
                <div className="flex gap-2.5 mb-5">
                  <button className="w-[230px] flex items-center cursor-pointer border border-lightgray px-[17px] py-[12px] rounded-md">
                    <img
                      src="assets/icons/file.svg"
                      alt="icon"
                      className="mr-5"
                    />
                    <span className="text-defult-gray text-sm font-reguler">
                      Documents example.pdf
                    </span>
                  </button>
                  <button className="min-w-[240px] max-w-[250px] flex items-center cursor-pointer border border-lightgray px-[17px] py-[12px] rounded-md">
                    <img
                      src="assets/icons/file.svg"
                      alt="icon"
                      className="mr-5"
                    />
                    <span className="text-defult-gray text-sm font-reguler">
                      Documents example.pdf
                    </span>
                    <img src="assets/icons/download.svg" className="ml-2.5" />
                  </button>
                </div>

                <div className="flex">
                  <span className="text-base text-dark-gray font-normal leading-4.5 mr-5">
                    RFQ Amount:{' '}
                    <span className="font-semibold">
                      {data.currency} {data.targetPrice}
                    </span>
                  </span>
                  <span className="text-base text-dark-gray font-normal leading-4.5 ">
                    QTY: <span className="font-semibold">{data.quantity}</span>
                  </span>
                  {Array.length - 1 === index ? (
                    <div className="ml-auto">
                      <a className="text-link ml-auto cursor-pointer">
                        Show more ...
                      </a>
                    </div>
                  ) : null}
                  {Array.length - 1 !== index ? (
                    <div style={{ marginTop: '50px' }}></div>
                  ) : null}
                </div>
              </React.Fragment>
            );
          })}

          <div>
            <span className="text-xs  text-desable-text font-normal leading-4.5 ">
              Issued date: <span className="font-medium">24 Aug 2022</span>
            </span>
            <span className="text-xs mx-5 text-desable-text font-normal leading-4.5 ">
              Delivery terms: <span className="font-medium">As agreed</span>
            </span>
            <span className="text-xs text-desable-text font-normal leading-4.5 ">
              Due date: <span className="font-medium">31 Sept 2022</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

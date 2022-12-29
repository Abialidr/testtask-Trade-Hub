import React from 'react'


import "./leftbar.scss"

const Leftbar = () => {
  return (
    <div className='w-[80px] fixed  top-0 left-0  bg-white-600 border-lightgray border h-screen leftbar-main'>
        <div className='flex flex-col items-center h-full'>
        <div className='bg-black  pt-[30px] '>
                <img src="/assets/icons/menuicon.svg" />
        </div>
        <div className='mt-[138px]'>
            <ul>
              <li className='py-[22px]'>
              <img src="/assets/icons/dasboard.svg" />
              </li>
              <li className='py-[22px]'>
              <img src="/assets/icons/business.svg" />
              </li>
              <li className='py-[22px]'>
              <img src="/assets/icons/trad.svg" />
              </li>
              <li className='py-[22px]'>
              <img src="/assets/icons/setting.svg" />
              </li>
            </ul>
        </div>
        <div className='w-full mt-auto'>
          <div className='flex justify-center py-4'>
          <img src="/assets/icons/info.svg" />
          </div>
          <div className='flex justify-center pt-4 pb-8'>
          <img src="/assets/icons/right.svg" />
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default Leftbar
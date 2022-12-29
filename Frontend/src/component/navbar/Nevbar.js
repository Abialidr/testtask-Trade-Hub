import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const Nevbar = () => {
    return (
        <div className='pt-5 flex justify-between'>
            <div className='flex items-center'>

                <div className='bg-white relative w-28 pl-[10px] pr-8 py-[5px] rounded mr-[78px] h-10'>

                    <img src="assets/nevdrop.png" />
                    <div className='absolute w-8 top-0 bottom-0 flex items-center justify-center right-0 '>

                        <img src="assets/icons/downArrow.svg"  className='cursor-pointer select-none'/>
                    </div>
                </div>
                <div className="relative">
                    <div className="w-full sm:max-w-xs">
                        <label htmlFor="search" className="sr-only">
                            Search
                        </label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center pl-3">
                                <MagnifyingGlassIcon className="h-5 w-5 text-text-gray" aria-hidden="true" />
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
            </div>
            <div className='flex '>
                <img src="assets/icons/notification.svg" />
                <img src="assets/icons/massage.svg" className='mx-9' />
                <div className='flex items-center relative pr-4'>

                    <img
                        className="inline-block h-[46px] w-[46px] rounded-full pr-1.5"
                        src="assets/profile.png"
                        alt=""
                    />
                    <span className='text-dark-gray font-medium text-sm leading-4.5' >
                        Aladdinb2b LLC
                    </span>
                    <div className='absolute right-0 cursor-pointer'>

                    <img src="assets/icons/downArrow.svg" className='select-none'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nevbar
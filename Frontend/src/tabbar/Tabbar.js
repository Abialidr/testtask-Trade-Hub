import React from 'react'

const tabs = [
    { name: 'Hall', href: '#', current: false },
    { name: 'Matches', href: '#', current: false },
    { name: 'Meetings   ', href: '#', current: false },
    { name: 'Trade Hub', href: '#', current: true },
    { name: 'Pipeline', href: '#', current: false },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Tabbar = () => {
  return (
    <div className='mt-10'>
        
        <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md bg-white border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? 'border-dark-orange text-dark-gray font-semibold border-b-2'
                    : 'border-transparent text-defult-gray hover:text-dark-gray font-normal leading-4.5 hover:border-dark-orange hover:border-b-2',
                  'whitespace-nowrap pb-4 px-1    text-base'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
        
        </div>
  )
}

export default Tabbar
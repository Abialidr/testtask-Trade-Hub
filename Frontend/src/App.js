import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Dasboard from './component/Dasboard/Dasboard';
import FaqMarket from './component/Faq Market/FaqMarket';
import Footer from './component/Footer/Footer';
import Leftbar from './component/leftbar/Leftbar';
import Tabbar from './component/tabbar/Tabbar';
import { useMarketSearch } from './context/MarketSearch';
import MyFaq from './component/MyFaq/MyFaq';
import OutgoingTable from './component/MyFaq/outgoingtable/OutgoingTable';
import IncomingTable from './component/MyFaq/incomingtable/IncomingTable';
import { IncomingListProvider, useIncomingList } from './context/IncomingList';
import { useOutgoingList } from './context/OutgoingList ';
import IncomingDetail from './component/MyFaq/IncomingDetail/IncomingDetail';
import OutgoingDetailClose from './component/MyFaq/OutgoingDetail/OutgoingDetailClose';

function App() {
  const { handleMarket } = useMarketSearch();
  const { handleIncomingList } = useIncomingList();
  const { handleOutgoingList } = useOutgoingList();

  useEffect(() => {
    handleMarket();
    handleIncomingList();
    handleOutgoingList();
  }, []);

  return (
    <>
      <div className="flex">
        <Leftbar />
        <div className="w-full pl-[7.5rem] pr-10 min-h-screen">
          <Tabbar />
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Dasboard />}>
                  <Route index element={<FaqMarket />} />
                  <Route path="RFQmarket" element={<FaqMarket />} />
                  <Route path="MyRFQ" element={<MyFaq />}>
                    <Route index element={<IncomingTable />} />
                    <Route path="Incoming" element={<IncomingTable />} />
                    <Route path="Outgoing" element={<OutgoingTable />} />
                  </Route>
                  <Route path="/IncomingView" element={<IncomingDetail />} />
                  <Route
                    path="/OutgoingView"
                    element={<OutgoingDetailClose />}
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

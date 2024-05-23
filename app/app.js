import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  NotFound,
  Home,
  PokemonDetail,
  BerryDetail,
  ItemDetail,
  BerryList,
  ItemList,
} from 'Containers/pageListAsync';
import { Navbar } from 'Components';
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
        <Route path="/berries" element={<BerryList />} />
        <Route path="/berry/:name" element={<BerryDetail />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/item/:name" element={<ItemDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        className={
          'lg:w-[500px] text-16 font-semibold w-[320px] p-0 !font-poppins'
        }
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        limit={3}
      />
    </Fragment>
  );
};

export default App;

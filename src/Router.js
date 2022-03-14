import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import ItemsList from './pages/ItemsList/ItemsList';
import ItemsDetail from './pages/ItemsDetail/ItemsDetail';
// import Header from "../src/components/Header/Header";
// import Footer from "../src/components/Footer/Footer";

function Router() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/itemslist" element={<ItemsList />} />;
        <Route path="/itemsdetail" element={<ItemsDetail />} />;
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default Router;

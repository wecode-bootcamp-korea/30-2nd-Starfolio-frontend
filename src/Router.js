import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import ItemsList from './pages/ItemsList/ItemsList';
import ItemsDetail from './pages/ItemsDetail/ItemsDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Redirect from './pages/Login/RedirectHandler';
import MyPage from './pages/MyPage/MyPage';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/itemslist" element={<ItemsList />} />;
        <Route path="/itemslist:id" element={<ItemsDetail />} />;
        <Route path="/itemsdetail" element={<ItemsDetail />} />;
        <Route path="/mypage" element={<MyPage />} />;
        <Route path="/oauth/kakao" element={<Redirect />} />;
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;

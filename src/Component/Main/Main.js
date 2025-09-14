import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Main = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <Header></Header>
      <div className="lg:ms-64">
        <Outlet></Outlet>
      </div>
      <div className="lg:ms-64">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;

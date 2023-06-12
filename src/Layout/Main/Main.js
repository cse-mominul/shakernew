import React from 'react';
import Navbar from '../../Pages/ShearPages/Navbar/Navbar';
import CompanyListPage from '../../Pages/CompanyLIstPage/CompanyListPage';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
    <div>
      <Navbar />
      <CompanyListPage></CompanyListPage>
      <Outlet/>
    </div>
    );
};

export default Main;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
// import Search from './Search';

const Layout = ({ user, setUser }) => {
  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      {/* <Search /> */}
      <Outlet />
    </div>
  );
};

export default Layout;

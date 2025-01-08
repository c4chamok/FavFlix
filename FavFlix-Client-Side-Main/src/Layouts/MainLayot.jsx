import React, { useContext } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayot = () => {
    const {isDark, setIsDark} = useContext(AuthContext)
    return (
        <div className={isDark ? "bg-gray-800": ""}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default MainLayot;
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import LoadingPage from '../Pages/LoadingPage';

const PrivateRoute = ({children}) => {

    const location = useLocation();
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <LoadingPage></LoadingPage>
    }

    if(user){
        return children
    }

    return (
        <Navigate to={'/login'} state={{ from: location }}></Navigate>
    );
};

export default PrivateRoute;
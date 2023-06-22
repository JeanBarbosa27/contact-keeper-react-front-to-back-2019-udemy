import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';

import authContext from '../../context/auth/authContext';

const PrivateRoute = ({ element }) => {
  const { isAuthenticated, loading } = useContext(authContext);

  if (!isAuthenticated && !loading) {
    return <Navigate to="/login" replace />
  }

  return element
}

export default PrivateRoute;

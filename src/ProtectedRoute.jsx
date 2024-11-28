import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
 
export default function ProtectedRoute() {
  const userRole = localStorage.getItem('role');
    console.log(userRole);
 
  if (userRole !== 'student') {
    return <Navigate to="/login" replace />;
  }
 
  return <Outlet />;
}
 
 
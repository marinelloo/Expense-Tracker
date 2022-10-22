/* eslint-disable prettier/prettier */
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from '.'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/LoginPage/Login'
import { selectUser } from '../store/features/useSlice'

const AppRoute: React.FC = () => {
  const user = useSelector(selectUser);
  const auth = true;
  console.log(user)
  return ( 
    auth ? 
    <Routes>
        {publicRoutes.map(route => 
        <Route
              key={route.path}
              path={route.path}
              element={route.element()}
              exact={route.exact} />
      )}
        <Route path={"*"} element={<Navigate to={RouteNames.REGISTER}/>} />
    </Routes>
   : 
    <Routes>
      {privateRoutes.map(route => 
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          element={route.element()}
        />
      )}
      <Route path='*' element={<Navigate to={RouteNames.DASHBOARD} />} />
    </Routes>
)}

export default AppRoute

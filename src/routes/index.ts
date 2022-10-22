import React from 'react'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/LoginPage/Login'
import RegisterPage from '../pages/RegisterPage/RegisterPage'

export interface IRoute {
  path: string
  element: any,
  exact?: boolean
}

export enum RouteNames {
  LOGIN = '/login',
  REGISTER = '/register',
  DASHBOARD = '/dashboard',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, exact: true, element: Login },
  { path: RouteNames.REGISTER, exact: true, element: RegisterPage}
]

export const privateRoutes: IRoute[] = [
  { path: RouteNames.DASHBOARD, exact: true, element: Dashboard },
]

import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./components/Header";

export const Layout: React.FC = () => {
  return (
    <div>
      <header><Header/></header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  )
}

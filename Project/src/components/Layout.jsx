import React from 'react'
import Header from './Header'
import Main from './Main'
import Search from './Search'

const Layout = () => {
  return (
    <div class="container">
    <Header/>
    <Search/>
    <Main/>
    </div>
  )
}

export default Layout

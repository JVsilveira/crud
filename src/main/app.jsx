import './app.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import React from 'react'
import Logo from '../components/template/logo'
import Nav from '../components/template/nav'
import Footer from '../components/template/footer'

export default props => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
)

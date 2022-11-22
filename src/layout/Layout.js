import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import BackToTop from '../components/backToTop'

export const Layout = ({children}) => {
  return (
    <Container>
    <Header/>
    <main>{children}</main> 
    <Footer/>
    <BackToTop />
    </Container>
  )
}

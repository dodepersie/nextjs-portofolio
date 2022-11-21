import React from 'react'

import Footer from '../components/Footer/Footer'
import HeaderNotFound from '../components/Header/HeaderNotFound'
import { Container } from './LayoutStyles'

export const LayoutNotFound = ({children}) => {
  return (
    <Container>
     <HeaderNotFound/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
import * as React from 'react'
//import { Link } from 'gatsby'
import Footer from './Reuseable/Footer'
import Navbar from './Reuseable/Navbar'
import "./bootstrap.min.css"
import "./layout.css"

  const Layout = ({pageTitle, children }) => {
    return (
      <div>
      <title>{pageTitle}</title>
        
        <main>
        <Navbar />
        {children}
        <Footer />
  
        </main>
      </div>
    )
  }

export default Layout
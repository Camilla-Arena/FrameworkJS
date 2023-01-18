/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import "./layout.css"
import { container,
          heading,
          navLinks,
          navLinkItem,
          navLinkText
             } from './layout.module.css'

import Footer from '../pages/footer'
import "./footer.css"

const Layout = ({pageTitle, children}) => {
    return (
        <React.Fragment>
            <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>
                    {pageTitle}
                </h1>
                {children}
            </main>
        </div>
        <Footer>

        </Footer>
        </React.Fragment>
        
      
        )
}



export default Layout
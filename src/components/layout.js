/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {library} from '@fortawesome/fontawesome-svg-core'
import {faGraduationCap, faBasketballBall, faGlobe,
  faBriefcase, faTools, faRunning, faChild} from '@fortawesome/free-solid-svg-icons'

import { Header } from "./header/header"
import { Hero } from "./hero/hero"
import { Education } from "./education/education"
import "./layout.css"


library.add(faGraduationCap)
library.add(faBasketballBall)
library.add(faGlobe)
library.add(faBriefcase)
library.add(faTools)
library.add(faRunning)
library.add(faChild)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <Hero />
      <Education />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

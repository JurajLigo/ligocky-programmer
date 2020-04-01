import React from "react"
import '@fortawesome/fontawesome-svg-core/styles.css';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Element } from "react-scroll"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faGraduationCap,
  faBasketballBall,
  faGlobe,
  faBookOpen,
  faBicycle,
  faBaby,
  faBriefcase,
  faTools,
  faRunning,
  faChild,
  faDumbbell,
  faPlane,
  faEnvelope,
  faMobileAlt,
  faFilePdf,
  faArrowCircleDown
} from "@fortawesome/free-solid-svg-icons"

import { Header } from "./header/header"
import { Hero } from "./hero/hero"
import { Education } from "./education/education"
import { Hobby } from "./hobby/hobby"
import { Language } from "./language/language"

import "./layout.css"
import { Work } from "./work/work"
import { Skill } from "./skill/skill"
import { Welcome } from "./welcome/welcome"
import { AboutMe } from "./aboutMe/aboutMe"
import { HeroMobilePortrait } from "./heroMobilePortrait/heroMobilePortrait"

library.add(faGraduationCap)
library.add(faBasketballBall)
library.add(faGlobe)
library.add(faBriefcase)
library.add(faTools)
library.add(faRunning)
library.add(faChild)
library.add(faPlane)
library.add(faDumbbell)
library.add(faBookOpen)
library.add(faBicycle)
library.add(faBaby)
library.add(faEnvelope)
library.add(faMobileAlt)
library.add(faFilePdf)
library.add(faArrowCircleDown)

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
      <Element name="about-me">
        <Hero />
        <HeroMobilePortrait />
      </Element>
      <div className="scroll-placeholder scroll-placeholder--gray"></div>
      <Element name="work">
        <Work />
      </Element>
      <div className="scroll-placeholder"></div>
      <Element name="skills">
        <Skill />
      </Element>
      <div className="scroll-placeholder"></div>
      <Element name="education">
        <Education />
      </Element>
      <div className="scroll-placeholder"></div>
      <Element name="languages">
        <Language />
      </Element>
      <div className="scroll-placeholder"></div>
      <Element name="hobbies">
        <Hobby />
      </Element>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

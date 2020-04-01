import React from "react"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import "./aboutMe.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Typing from "react-typing-animation"

export const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero/hero-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="about-me">
      <div className="base-container">
        <h1 className="title">about me</h1>
        <p className="subtitle">A small introduction about myself</p>
        <div className="about-me__wrapper">
          <div className="about-me__content">
            <p className="about-me__text">
              Freelance, software engineer focusing on React with more than 10+
              years of various experiences with software development. Started
              career as Java programmer and gradually transform to frontend
              Javascript. Skilled, passionate professional with a demonstrated
              history of working in the international environment, big
              information systems, and also small web projects
            </p>

            <div className="about-me__contacts">
              <a className="about-me__button about-me__button--white" href="mailto:j.ligocky@gmail.com">
                <FontAwesomeIcon
                  icon="envelope"
                  size="lg"
                  className="hero__icon"
                />
                write me
              </a>
              <a className="about-me__button about-me__button--white" href="tel:00421902329589">
                <FontAwesomeIcon
                  icon="mobile-alt"
                  size="lg"
                  className="hero__icon"
                />
                call me
              </a>
              <a className="about-me__button about-me__button--white">
                <FontAwesomeIcon
                  icon="file-pdf"
                  size="lg"
                  className="hero__icon"
                />
                cv download
              </a>
            </div>
          </div>
          <div className="about-me__image-wrapper">
            <Img fluid={data.image.childImageSharp.fluid} className="about-me__portrait" />
          </div>
        </div>
      </div>
    </div>
  )
}

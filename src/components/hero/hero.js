import React from "react"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import "./hero.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Typing from "react-typing-animation"

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      desktopImage: file(relativePath: { eq: "hero/hero-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: { eq: "hero/hero-mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const sources = [
    data.desktopImage.childImageSharp.fluid,
    {
      ...data.mobileImage.childImageSharp.fluid,
      media: `(max-width: 768px)`,
    },
  ]

  return (
    <>
      <div className="base-container hero">
        <div className="hero__wrapper">
          <div className="hero__content">
            <Img fluid={sources} className="hero__portrait" />
            <h1 className="title hero__title">Juraj Ligocky</h1>
            <Typing loop={true} cursorClassName="welcome__cursor">
              <h2 className="hero__subtitle">Software Engineer</h2>
              <Typing.Reset count={1} delay={5000} />
            </Typing>
            <p className="hero__text">
              Freelance, software engineer focusing on React with more than 10+
              years of various experiences with software development. Started
              career as Java programmer and gradually transform to frontend
              Javascript. Skilled, passionate professional with a demonstrated
              history of working in the international environment, big
              information systems, and also small web projects
            </p>

            <div className="hero__contacts">
              <a className="hero__button" href="mailto:j.ligocky@gmail.com">
                <FontAwesomeIcon
                  icon="envelope"
                  size="lg"
                  className="hero__icon"
                />
                write me
              </a>
              <a className="hero__button" href="tel:00421902329589">
                <FontAwesomeIcon
                  icon="mobile-alt"
                  size="lg"
                  className="hero__icon"
                />
                call me
              </a>
              <a className="hero__button hero__button--white">
                <FontAwesomeIcon
                  icon="file-pdf"
                  size="lg"
                  className="hero__icon"
                />
                cv download
              </a>
            </div>
          </div>
          <div className="hero__image-wrapper">
            <Img fluid={sources} className="hero__image" />
          </div>
        </div>
      </div>
    </>
  )
}

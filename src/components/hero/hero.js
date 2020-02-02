import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery } from "gatsby"
import "./hero.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Hero = () => {

  const data = useStaticQuery(graphql`
    query {
      desktopImage: file(relativePath: { eq: "hero/hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4800) {
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
      media: `(orientation: portrait)`
    }
  ]

  return (
    <>
      <BackgroundImage
        fluid={sources}
        className="hero__image"
      >
        <div className="base-container">
          <div className="hero__bubble">
            <h2 className="hero__subtitle">I AM</h2>
            <h1 className="hero__title">JURAJ LIGOCKY</h1>
            <p className="hero__text">
              Freelance, frontend, software engineer focusing on react with more
              than 10+ years of various experiences with software development
            </p>
            <div className="hero__contacts">
              <a className="hero__button">
                <FontAwesomeIcon
                  icon="envelope"
                  size="lg"
                  className="hero__icon"
                />

              </a>
              <a className="hero__button">
                <FontAwesomeIcon
                  icon="mobile-alt"
                  size="lg"
                  className="hero__icon"
                />

              </a>
              <a className="hero__button">
                <FontAwesomeIcon
                  icon="file-pdf"
                  size="lg"
                  className="hero__icon"
                />

              </a>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </>
  )
}

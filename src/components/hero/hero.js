import React from "react"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import "./hero.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Hero = () => {

  const data = useStaticQuery(graphql`
    query {
      desktopImage: file(relativePath: { eq: "hero/hero-mobile.jpg" }) {
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
      media: `(orientation: portrait)`
    }
  ]

  return (
    <>
        <div className="base-container hero">
          <div className="hero__wrapper">
            <div className="hero__content">
              <h1 className="title">ABOUT ME</h1>
              <p className="subtitle hero__main-subtitle">A small introduction about myself</p>
              <p className="hero__text">Freelance, software engineer focusing on React with more than 10+ years of various experiences with software
                development. Started career as Java programmer and gradually transform to frontend Javascript. Skilled, passionate
                professional with a demonstrated history of working in the international environment, big information systems,
                and also small web projects</p>

              <div className="hero__contacts">
                <a className="hero__button">
                  <FontAwesomeIcon
                    icon="envelope"
                    size="lg"
                    className="hero__icon"
                  />
                  write me
                </a>
                <a className="hero__button">
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

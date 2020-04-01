import React from "react"
import BackgroundImage from "gatsby-background-image"
import Typing from "react-typing-animation"
import { useStaticQuery } from "gatsby"
import "./heroMobilePortrait.scss"

export const HeroMobilePortrait = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero/hero-portrait-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="hero-mobile-portrait">
      <BackgroundImage
        fluid={data.image.childImageSharp.fluid}
        className="hero-mobile-portrait__background">
        <div className="hero-mobile-portrait__content">
          <p className="hero-mobile-portrait__subtitle">I am</p>
          <h1 className="hero-mobile-portrait__title">Juraj Ligocky</h1>
          <Typing loop={true} cursorClassName="hero-mobile-portrait__cursor">
            <h2 className="hero-mobile-portrait__description">Software Engineer</h2>
            <Typing.Reset count={1} delay={5000} />
          </Typing>
        </div>
      </BackgroundImage>
    </div>
  )
}

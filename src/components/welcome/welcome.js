import React from "react"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Typing from "react-typing-animation"

import "./welcome.scss"
import { useStaticQuery } from "gatsby"

export const Welcome = () => {
  const data = useStaticQuery(graphql`
    query {
      desktopImage: file(relativePath: { eq: "hero/cv-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: { eq: "hero/cv-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
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
      media: `(max-width: 768px) and (orientation: portrait)`,
    },
  ]
  return (
    <div className="welcome">
      <div className="welcome__first">
      </div>
      <FontAwesomeIcon
        className="welcome__arrow-down"
        icon="arrow-circle-down"
        size="4x"
      />
      <div className="welcome__second">
        <BackgroundImage
          fluid={sources}
          className="welcome__background"
        />
      </div>
      <div className="welcome__content">
        <p className="welcome__subtitle">I am</p>
        <h1 className="welcome__title">Juraj Ligocky</h1>
        <Typing loop={true} cursorClassName="welcome__cursor">
          <h2 className="welcome__description">Software Engineer</h2>
          <Typing.Reset count={1} delay={5000} />
        </Typing>
      </div>
    </div>
  )
}

import React from "react"
import BackgroundImage from  "gatsby-background-image"
import { useStaticQuery } from "gatsby"
import "./hero.scss"

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero/hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <BackgroundImage fluid={data.placeholderImage.childImageSharp.fluid} className="hero__image" >
        {/*
        <div className="hero__cloud">
          <h2 className="hero__title hero__title--small">I AM</h2>
          <h1 className="hero__title">Juraj Ligocky</h1>
          <p className="hero__text">
            FRONTEND, FREELANCE DEVELOPER FOCUSING ON REACT WITH MORE THAN 9+ YEARS OF EXPERIENCES
            WITH SOFTWARE DEVELOPMENT. STARTED CAREER AS JAVA PROGRAMMER AND GRADUALLY TRANSFORM TO FRONTED
            JAVASCRIPT. SKILLED PROFESSIONAL WITH A DEMONSTRATED HISTORY OF WORKING IN THE INTERNATIONAL
            ENVIRONMENT (BIG INFORMATION SYSTEMS) AND ALSO SMALL WEB PROJECTS
          </p>
        </div>
     */}
      </BackgroundImage>
    </>
    )
}
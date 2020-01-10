import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Scroll from "react-scroll"
import "./header.scss"

const ScrollLink = Scroll.Link;

export const Header = () => (
  <header className="header">
    <nav class="header__navigation">
      <ScrollLink
        to="about-me"
        spy={true}
        hashSpy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="header__link"
        activeClass="header__link--active"
      >
        <FontAwesomeIcon
          className="header__icon"
          icon="child"
          size="lg"
        />
        <span className="header__text">ABOUT ME</span>
      </ScrollLink>
      <Link className="header__link">
        <FontAwesomeIcon
          className="header__icon"
          icon="briefcase"
          size="lg"
        />
        <span className="header__text">EXPERIENCES</span>
      </Link>
      <Link className="header__link">
        <FontAwesomeIcon
          className="header__icon"
          icon="tools"
          size="lg"
        />
        <span className="header__text">SKILLS</span>
      </Link>
      <ScrollLink
        to="education"
        spy={true}
        hashSpy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="header__link"
        activeClass="header__link--active"
      >
        <FontAwesomeIcon
          className="header__icon"
          icon="child"
          size="lg"
        />
        <span className="header__text">EDUCATION</span>
      </ScrollLink>
      <Link className="header__link">
        <FontAwesomeIcon
          className="header__icon"
          icon="globe"
          size="lg"
        />
        <span className="header__text">LANGUAGES</span>
      </Link>
      <ScrollLink
        to="hobbies"
        spy={true}
        hashSpy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="header__link"
        activeClass="header__link--active"
      >
        <FontAwesomeIcon
          className="header__icon"
          icon="child"
          size="lg"
        />
        <span className="header__text">HOBBIES</span>
      </ScrollLink>
    </nav>
  </header>
)

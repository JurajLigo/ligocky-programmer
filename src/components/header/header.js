import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.scss"

export const Header = () => (
  <header className="header">
    <nav class="header__navigation">
      <Link className="header__link">
        <FontAwesomeIcon
          className="header__icon"
          icon="child"
          size="lg"
        />
        <span className="header__text">ABOUT ME</span>
      </Link>
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
      <Link className="header__link">
        <FontAwesomeIcon
          className="header__icon"
          icon="graduation-cap"
          size="lg"
        />
        <span className="header__text">EDUCATION</span>
      </Link>
      <Link className="header__link">
        <FontAwesomeIcon
          className="header__icon"
          icon="globe"
          size="lg"
        />
        <span className="header__text">LANGUAGES</span>
      </Link>
      <Link className="header__link">
        <FontAwesomeIcon
          className="header__icon"
          icon="running"
          size="lg"
        />
        <span className="header__text">HOBBIES</span>
      </Link>
    </nav>
  </header>
)

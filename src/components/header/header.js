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
          size="1x"
        />
        ABOUT ME
      </Link>
      <Link className="header__link">
        <FontAwesomeIcon
          className="header__icon"
          icon="briefcase"
          size="1x"
        />
        EXPERIENCES
      </Link>
      <Link className="header__link">
        <FontAwesomeIcon
          className="header__icon"
          icon="tools"
          size="1x"
        />
        SKILLS
      </Link>
      <Link className="header__link">
        <FontAwesomeIcon
          className="header__icon"
          icon="graduation-cap"
          size="1x"
        />
      EDUCATION
      </Link>
      <Link className="header__link">
        <FontAwesomeIcon
          className="header__icon"
          icon="globe"
          size="1x"
        />
        LANGUAGES
      </Link>
      <Link className="header__link">
        <FontAwesomeIcon
          className="header__icon"
          icon="running"
          size="1x"
        />
        HOBBIES
      </Link>
    </nav>
  </header>
)

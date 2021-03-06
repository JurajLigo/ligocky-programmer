import React, { useEffect, useState } from "react"
import {throttle} from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Scroll from "react-scroll"
import "./header.scss"

const ScrollLink = Scroll.Link

const SCROLLING_OFFSET = -30

export const Header = () => {

  const [isScrollTop, setScrollTop] = useState(true);

  useEffect(() => {
    const throttled = throttle(scrollHandle, 100);
    window.addEventListener("scroll", scrollHandle);
  }, []);

  const scrollHandle = () => {
    setScrollTop(window.scrollY <= 0 ? true : false);
  }

  const headerStyle = isScrollTop ? 'header--init' : '';

  return (
    <header className={`header ${headerStyle}`}>
      <nav className="header__navigation">
        <ScrollLink
          to="about-me"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={500}
          offset={SCROLLING_OFFSET}
          className="header__link"
          activeClass="header__link--active"
        >
          <FontAwesomeIcon className="header__icon" icon="child" size="lg" />
          <span className="header__text">ABOUT ME</span>
        </ScrollLink>
        <ScrollLink
          to="work"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={500}
          offset={SCROLLING_OFFSET}
          className="header__link"
          activeClass="header__link--active"
        >
          <FontAwesomeIcon
            className="header__icon"
            icon="briefcase"
            size="lg"
          />
          <span className="header__text">EXPERIENCES</span>
        </ScrollLink>
        <ScrollLink
          to="skills"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={500}
          offset={SCROLLING_OFFSET}
          className="header__link"
          activeClass="header__link--active"
        >
          <FontAwesomeIcon className="header__icon" icon="tools" size="lg" />
          <span className="header__text">SKILLS</span>
        </ScrollLink>
        <ScrollLink
          to="education"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={500}
          offset={SCROLLING_OFFSET}
          className="header__link"
          activeClass="header__link--active"
        >
          <FontAwesomeIcon
            className="header__icon"
            icon="graduation-cap"
            size="lg"
          />
          <span className="header__text">EDUCATION</span>
        </ScrollLink>
        <ScrollLink
          to="languages"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={500}
          offset={SCROLLING_OFFSET}
          className="header__link"
          activeClass="header__link--active"
        >
          <FontAwesomeIcon className="header__icon" icon="globe" size="lg" />
          <span className="header__text">LANGUAGES</span>
        </ScrollLink>
        <ScrollLink
          to="hobbies"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={500}
          offset={SCROLLING_OFFSET}
          className="header__link"
          activeClass="header__link--active"
        >
          <FontAwesomeIcon className="header__icon" icon="running" size="lg" />
          <span className="header__text">HOBBIES</span>
        </ScrollLink>
      </nav>
    </header>
  )
}

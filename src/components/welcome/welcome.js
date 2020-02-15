import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Typing from "react-typing-animation"

import "./welcome.scss"

export const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome__first">
      </div>
      <div className="welcome__second"></div>
      <FontAwesomeIcon
        className="welcome__arrow-down"
        icon="arrow-circle-down"
        size="4x"
      />
      <div className="welcome__content">
        <p className="welcome__subtitle">I am</p>
        <h1 className="welcome__title">Juraj Ligocky</h1>
        <Typing loop={true} cursorClassName="welcome__cursor">
          <h2 className="welcome__description">Frontend software engineer</h2>
          <Typing.Reset count={1} delay={5000} />
        </Typing>
      </div>
    </div>
  )
}

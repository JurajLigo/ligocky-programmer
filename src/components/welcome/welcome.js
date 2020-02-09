import React from "react"
import "./welcome.scss"

export const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome__first"></div>
      <div className="welcome__second"></div>
      <div className="welcome__content">
        <h2 className="welcome__subtitle">I am</h2>
        <h1 className="welcome__title">Juraj Ligocky</h1>
      </div>
    </div>
  )
}

import * as React from "react"
import SlovakFlag from '../../images/flags/SK.png';
import "./language.scss"

export const Language = () => {
  return (
    <div className="language">
      <div className="base-container">
        <h1 className="title">Languages</h1>
        <p className="subtitle">I speak</p>

        <div className="language__section">
          <div className="language__row">
            <div className="language__title">
              <img src={SlovakFlag} className="language__flag" />
              SLOVAK<span className="language__subtitle">Native</span>
            </div>
            <div className="language__rating-wrapper">
              <span className="language__rating language__rating--fill"></span>
              <span className="language__rating language__rating--fill"></span>
              <span className="language__rating language__rating--fill"></span>
              <span className="language__rating language__rating--fill"></span>
              <span className="language__rating language__rating--fill"></span>
              <span className="language__rating language__rating--fill"></span>
              <span className="language__rating language__rating--fill"></span>
              <span className="language__rating language__rating--fill"></span>
              <span className="language__rating language__rating--fill"></span>
              <span className="language__rating language__rating--fill"></span>
            </div>
          </div>

          <div className="language__row">
            <div className="language__title">
              ENGLISH
              <div className="language__subtitle">Professional working proficiency</div>
            </div>
            <div className="language__rating-wrapper">
              <span className="language__rating language__rating--fill"></span>
              <span className="language__rating language__rating--fill"></span>
              <span className="language__rating language__rating--fill"></span>
              <span className="language__rating language__rating--fill"></span>
              <span className="language__rating language__rating--fill"></span>
              <span className="language__rating"></span>
              <span className="language__rating"></span>
              <span className="language__rating"></span>
              <span className="language__rating"></span>
              <span className="language__rating"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

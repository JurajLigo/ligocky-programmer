import * as React from "react"
import "./language.scss"

export const Language = () => {
  return (
    <div className="language">
      <div className="base-container">
        <h1 className="title">Languages</h1>
        <p className="subtitle">I speak</p>

        <div className="language__section">
          <div className="language__row">
            <div>
              SLOVAK
              <div>Native</div>
            </div>
            <div>
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

          <div className="language__row">
            <div>
              SLOVAK
              <div>Native</div>
            </div>
            <div>
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

import * as React from "react"
import SlovakFlag from "../../images/flags/SK.svg"
import BritainFlag from "../../images/flags/GB.svg"
import GermanFlag from "../../images/flags/DE.svg"
import SpainFlag from "../../images/flags/ES.svg"
import "./language.scss"
import { Score } from "../common/score"

export const Language = () => {
  const limit = 10;

  return (
    <div className="language">
      <div className="base-container">
        <h1 className="title">Languages</h1>
        <p className="subtitle">I speak</p>

        <div className="language__section">
          <div className="language__row">
            <div className="language__title-wrapper">
              <img alt="Slovak Flag" src={SlovakFlag} className="language__flag" />
              <div className="language__title">
                SLOVAK
                <span className="language__subtitle">Native</span>
              </div>
            </div>
            <Score value={10} limit={limit} />
          </div>

          <div className="language__row">
            <div className="language__title-wrapper">
              <img alt="British Flag" src={BritainFlag} className="language__flag" />
              <div className="language__title">
                ENGLISH
                <span className="language__subtitle">Professional working proficiency</span>
              </div>
            </div>
            <Score value={8} limit={limit} />
          </div>

          <div className="language__row">
            <div className="language__title-wrapper">
              <img alt="German Flag" src={GermanFlag} className="language__flag" />
              <div className="language__title">
                GERMAN
                <span className="language__subtitle">Pre-intermediate level</span>
              </div>
            </div>
            <Score value={3} limit={limit} />
          </div>

          <div className="language__row">
            <div className="language__title-wrapper">
              <img alt="Spanish Flag" src={SpainFlag} className="language__flag" />
              <div className="language__title">
                SPANISH
                <span className="language__subtitle">Basics</span>
              </div>
            </div>
            <Score value={1} limit={limit} />
          </div>

        </div>
      </div>
    </div>
  )
}

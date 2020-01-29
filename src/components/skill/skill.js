import React from "react"
import "../base.scss"
import "./skill.scss"
import { Score } from "../common/score"

export const Skill = () => {
  const limit = 10;

  return (
    <div className="skill">
      <div className="base-container">
        <h1 className="title">SKILLS</h1>
        <p className="subtitle">My technology stack</p>

        <div className="skill__section">
          <div className="skill__row">
            <div className="skill__title-wrapper">
              <div className="skill__title skill__title--react">
                React.js
              </div>
            </div>
            <Score value={8} limit={limit} />
          </div>

          <div className="skill__row">
            <div className="skill__title-wrapper">
              <div className="skill__title skill__title--javascript">
                Javascript
              </div>
            </div>
            <Score value={8} limit={limit} />
          </div>

          <div className="skill__row">
            <div className="skill__title-wrapper">
              <div className="skill__title skill__title--typescript">
                Typescript
              </div>
            </div>
            <Score value={6} limit={limit} />
          </div>

          <div className="skill__row">
          <div className="skill__title-wrapper">
            <div className="skill__title skill__title--redux">
              Redux
            </div>
          </div>
          <Score value={5} limit={limit} />
        </div>

          <div className="skill__row">
            <div className="skill__title-wrapper">
              <div className="skill__title skill__title--html">
                HTML
              </div>
              <div className="skill__title skill__title--css">
                CSS
              </div>
            </div>
            <Score value={7} limit={limit} />
          </div>

        </div>
      </div>
    </div>
  )
}

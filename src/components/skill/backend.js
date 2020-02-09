import React from "react"
import "../base.scss"
import "./skill.scss"
import { Score } from "../common/score"

export const Backend = () => {
  const limit = 10

  return (
    <div className="skill__section">
      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title skill__title--java">Java</div>
          <div className="skill__title skill__title">J2EE</div>
        </div>
        <Score value={6} limit={limit} />
      </div>

      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title skill__title--spring">Spring</div>
        </div>
        <Score value={2} limit={limit} />
      </div>

      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title">JUnit</div>
        </div>
        <Score value={3} limit={limit} />
      </div>

      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title">SQL</div>
        </div>
        <Score value={5} limit={limit} />
      </div>

      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title skill__title--python">Python</div>
        </div>
        <Score value={3} limit={limit} />
      </div>

      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title skill__title--android">Android</div>
        </div>
        <Score value={2} limit={limit} />
      </div>

      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title skill__title--git">Git</div>
        </div>
        <Score value={7} limit={limit} />
      </div>

      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title skill__title">SOA</div>
          <div className="skill__title skill__title">MDA</div>
          <div className="skill__title skill__title">BPM</div>
        </div>
        <Score value={3} limit={limit} />
      </div>
    </div>
  )
}

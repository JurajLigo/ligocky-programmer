import React from "react"
import "../base.scss"
import "./skill.scss"
import { Score } from "../common/score"

export const OtherSkill = () => {
  const limit = 10

  return (
    <div className="skill__section">
      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title">Git</div>
        </div>
        <Score value={7} limit={limit} />
      </div>
      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title">SCRUM</div>
        </div>
        <Score value={6} limit={limit} />
      </div>
      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title">MDA</div>
          <div className="skill__title">SOA</div>
          <div className="skill__title">BPM</div>
        </div>
        <Score value={4} limit={limit} />
      </div>
    </div>
  )
}

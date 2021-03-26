import React from "react"
import "../base.scss"
import "./skill.scss"
import { Score } from "../common/score"

export const Frontend = () => {
  const limit = 10

  return (
    <div className="skill__section">
      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title skill__title--react">React.js</div>
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
        <Score value={7} limit={limit} />
      </div>

      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title skill__title--redux">Redux</div>
        </div>
        <Score value={5} limit={limit} />
      </div>

      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title skill__title--html">HTML</div>
          <div className="skill__title skill__title--css">CSS</div>
        </div>
        <Score value={7} limit={limit} />
      </div>

      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title skill__title--sass">Sass</div>
          <div className="skill__title skill__title--bem">BEM</div>
        </div>
        <Score value={7} limit={limit} />
      </div>

      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title skill__title--jasmine">Jasmine</div>
          <div className="skill__title">Enzyme</div>
        </div>
        <Score value={5} limit={limit} />
      </div>

      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title skill__title--gatsby">Gatsby.js</div>
          <div className="skill__title skill__title--next">Next.js</div>
        </div>
        <Score value={5} limit={limit} />
      </div>

      <div className="skill__row">
        <div className="skill__title-wrapper">
          <div className="skill__title skill__title--php">PHP</div>
          <div className="skill__title skill__title--wordpress">WordPress</div>
        </div>
        <Score value={2} limit={limit} />
      </div>
    </div>
  )
}

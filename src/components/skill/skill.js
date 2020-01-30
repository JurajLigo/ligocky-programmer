import React from "react"
import "../base.scss"
import "./skill.scss"
import { Score } from "../common/score"

export const Skill = () => {
  const limit = 10

  return (
    <div className="skill">
      <div className="base-container">
        <h1 className="title">SKILLS</h1>
        <p className="subtitle">My technology stack</p>

        <div className="skill__section">
          <h3 className="skill__section-title">FRONTEND</h3>
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
            </div>
            <Score value={5} limit={limit} />
          </div>
        </div>

        <div className="skill__section">
          <h3 className="skill__section-title">BACKEND</h3>
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
      </div>
    </div>
  )
}

import React from "react"
import PropTypes from "prop-types"
import "./workContentItem.scss"

export const WorkContentItem = props => {
  return (
    <>
      <h3 className="work-content-item__subtitle">Project description</h3>
      <p className="work-content-item__text">{props.projectText}</p>
      <h3 className="work-content-item__subtitle">My responsibilites</h3>
      <ul className="work-content-item__notes">
        {props.responsibilities &&
          props.responsibilities.map((responsibility, index) => (
            <li key={index} className="work-content-item__note">
              {responsibility}
            </li>
          ))}
      </ul>
      <h3 className="work-content-item__subtitle">Technology stack</h3>
      <div className="work-content-item__technology">
        {props.technologies.map((technology, index) => (
          <div key={index} className="work-content-item__technology-item">
            {technology}
          </div>
        ))}
      </div>
    </>
  )
}

WorkContentItem.propTypes = {
  projectText: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
}

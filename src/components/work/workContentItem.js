import React from "react"
import PropTypes from "prop-types"
import "./workContentItem.scss"

export const WorkContentItem = props => {
  return (
    <>
      <h3 className="work-content-item__subtitle">Project description</h3>
      <p className="work-content-item__text">{props.projectText}</p>
      <h3 className="work-content-item__subtitle">My responsibilites</h3>
      <p className="work-content-item__text">{props.responsibilityText}</p>
      <h3 className="work-content-item__subtitle">Technology stack</h3>
      <div className="work-content-item__technology">
        {props.technologies.map(technology => (
          <div className="work-content-item__technology-item">{technology}</div>
        ))}
      </div>
    </>
  )
}

WorkContentItem.propTypes = {
  projectText: PropTypes.string.isRequired,
  responsibilityText: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired
}

import {VerticalTimelineElement } from "react-vertical-timeline-component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import PropTypes from "prop-types"
import "react-vertical-timeline-component/style.min.css"
import "../base.scss"
import "./timelineItem.scss"

export const TimelineItem = (props) => {
  const iconBackground = { background: "rgb(255, 255, 255)", color: "darkgray" }
  const EducationIcon = <FontAwesomeIcon icon="graduation-cap" size="2x" />

  return (
    <VerticalTimelineElement
      date="2010 - 2011"
      iconStyle={iconBackground}
      icon={EducationIcon}
      className="timeline-item"
    >
      <div>Slovak University of Technology, Faculty of Informatics and Information Technologies</div>
      <h3 className="vertical-timeline-element-title timeline-item__title">{props.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">
        {props.subtitle}
      </h4>
      <p className="vertical-timeline-element-text">
        {props.text}
      </p>
    </VerticalTimelineElement>
  )
}

TimelineItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string
};

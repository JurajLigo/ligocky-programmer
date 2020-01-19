import { VerticalTimelineElement } from "react-vertical-timeline-component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import PropTypes from "prop-types"
import "react-vertical-timeline-component/style.min.css"
import "../base.scss"
import "./timelineItem.scss"

export const TimelineItem = props => {
  const iconBackground = { background: "rgb(255, 255, 255)", color: "darkgray" }
  const EducationIcon = <FontAwesomeIcon icon="graduation-cap" size="2x" />

  return (
    <VerticalTimelineElement
      date={props.date}
      iconStyle={iconBackground}
      icon={EducationIcon}
      className="timeline-item"
    >
      <div className={`timeline-item__header ${props.headerStyle}`}>
        {props.headerText}
      </div>
      <h3 className="timeline-item__title">
        {props.title}
      </h3>
      {props.children}
    </VerticalTimelineElement>
  )
}

TimelineItem.propTypes = {
  headerText: PropTypes.string,
  headerStyle: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.element,
}

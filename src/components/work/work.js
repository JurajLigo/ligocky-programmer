import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import React from "react"
import "react-vertical-timeline-component/style.min.css"
import "../base.scss"
import "./work.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TimelineItem } from "../common/timelineItem"

export const Work = () => {
  const iconBackground = { background: "rgb(255, 255, 255)", color: "darkgray" }
  const EducationIcon = <FontAwesomeIcon icon="graduation-cap" size="2x" />

  return (
    <div className="work">
      <div className="base-container">
        <h1 className="title">WORK EXPERIENCES</h1>
        <p className="subtitle">My working experiences</p>
        <VerticalTimeline>
          <TimelineItem
            headerText="Posam - Project Allianz"
            date="2008 - 2009, Bratislava"
            title="Junior Java programmer"
            text="8 years high school focused on foreign languages"
            headerStyle="education__header education__header--gymnasium">
            <p className="timeline-item__text timeline-item__text">
              Information system for evidence various insurances
            </p>
            <p className="vertical-timeline-element-text timeline-item__text">
              Implementing server-domain objects based on diagrams, programming, bug fixing on frontend and
              backend side
            </p>
          </TimelineItem>
        </VerticalTimeline>
      </div>
    </div>
  )
}

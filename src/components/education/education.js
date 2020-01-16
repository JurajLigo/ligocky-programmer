import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import React from "react"
import "react-vertical-timeline-component/style.min.css"
import "../base.scss"
import "./education.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TimelineItem } from "../common/timelineItem"

export const Education = () => {
  const iconBackground = { background: "rgb(255, 255, 255)", color: "darkgray" }
  const EducationIcon = <FontAwesomeIcon icon="graduation-cap" size="2x" />

  return (
    <div className="education">
      <div className="base-container">
        <h1 className="title">EDUCATION</h1>
        <p className="subtitle">My education and courses history</p>
        <VerticalTimeline>
          <TimelineItem title="Senior programmer" subtitle="Subtitle" text="Tu sme" />
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={iconBackground}
            icon={EducationIcon}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={iconBackground}
            icon={EducationIcon}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Online Course
            </h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={iconBackground}
            icon={EducationIcon}
          >
            <h3 className="vertical-timeline-element-title">
              Agile Development Scrum Master
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certification
            </h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

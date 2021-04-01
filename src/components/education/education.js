import { VerticalTimeline } from "react-vertical-timeline-component"
import React from "react"
import "react-vertical-timeline-component/style.min.css"
import "../base.scss"
import "./education.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TimelineItem } from "../common/timelineItem"

export const Education = () => {
  const EducationIcon = <FontAwesomeIcon icon="graduation-cap" size="2x" />

  return (
    <div className="education">
      <div className="base-container">
        <h1 className="title">EDUCATION</h1>
        <p className="subtitle">My education and courses history</p>
        <VerticalTimeline animate={false}>
          <TimelineItem
            headerText="Slovak University of Technology, Faculty of Informatics and Information
        Technologies"
            date="2009 - 2010, Bratislava"
            title="Engineer, Information systems"
            headerStyle="education__header education__header--stu"
            icon={EducationIcon}
          >
            <p className="vertical-timeline-element-text timeline-item__text">
              Engineering study focused on information systems and software
              architecture. The theme of final project was: Using design
              patterns by service composition in SOA
            </p>
          </TimelineItem>
          <TimelineItem
            headerText="Universitat Politechnica de Catalunya, Faculcat d'Informatics de Barcelona"
            date="2009, Barcelona"
            title="Erasmus exchange participant"
            headerStyle="education__header education__header--upc"
            icon={EducationIcon}
          >
            <p className="vertical-timeline-element-text timeline-item__text">
              Six month study through the Erasmus exchange
            </p>
          </TimelineItem>
          <TimelineItem
            headerText="Posam - Java Academy"
            date="2007, Bratislava"
            title="Succesfull participant"
            headerStyle="education__header education__header--posam"
            icon={EducationIcon}
          >
            <p className="vertical-timeline-element-text timeline-item__text">
              The half year lasting system of courses focused on Java and J2EE
              (quick guide to Java, Swing, Spring, EJB, Wicket, design
              patterns). After passing all courses and tests, I had to create
              J2EE application using mentioned frameworks. Best participants
              were then offered work contract
            </p>
          </TimelineItem>
          <TimelineItem
            headerText="Slovak University of Technology, Faculty of Informatics and Information
        Technologies"
            date="2004 - 2008, Bratislava"
            title="Bachelor, Informatics"
            headerStyle="education__header education__header--stu"
            icon={EducationIcon}
          >
            <p className="vertical-timeline-element-text timeline-item__text">
              Bachelor study focused on informatics and programming. The theme
              of final project was: Swing Guide
            </p>
          </TimelineItem>
          <TimelineItem
            headerText="Gymnasium Topolcany"
            date="1996 - 2004, Topolcany"
            title="High School with graduation"
            text="8 years high school focused on foreign languages"
            headerStyle="education__header education__header--gymnasium"
            icon={EducationIcon}
          >
            <p className="vertical-timeline-element-text timeline-item__text">
              8 years high school focused on foreign languages
            </p>
          </TimelineItem>
        </VerticalTimeline>
      </div>
    </div>
  )
}

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
          <TimelineItem
            headerText="Slovak University of Technology, Faculty of Informatics and Information
        Technologies"
            title="Engineer, Information systems"
            text="Engineering study focused on information systems and software architecture. The theme of
                        final project was: Using design patterns by service composition in SOA"
            headerStyle="education__header education__header--stu"
          />
          <TimelineItem
            headerText="Universitat Politechnica de Catalunya, Faculcat d'Informatics de Barcelona"
            title="Master Software Engineering and Information
                        Systems"
            text="Six month study through the Erasmus exchange"
            headerStyle="education__header education__header--upc"
          />
          <TimelineItem
            headerText="Posam"
            title="Succesfull participant of Java Academy"
            text="The half year lasting system of courses focused on Java and J2EE (quick guide to Java, Swing,
                        Spring, EJB, Wicket, design patterns). After passing all courses and tests i had to create J2EE
                        application
                        using mentioned frameworks. Best participants were then offered work contract"
            headerStyle="education__header education__header--posam"
          />
          <TimelineItem
            headerText="Slovak University of Technology, Faculty of Informatics and Information
        Technologies"
            title="Bachelor, Informatics"
            text="Bachelor study focused on informatics and programming. The theme of final project was:
                        Swing Guide"
            headerStyle="education__header education__header--stu"
          />
          <TimelineItem
            headerText="Gymnasium Topolcany"
            title="High School with graduation"
            text="8 years high school focused on foreign languages"
            headerStyle="education__header education__header--gymnasium"
          />
        </VerticalTimeline>
      </div>
    </div>
  )
}

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
import { WorkContentItem } from "./workContentItem"

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
            headerText="VUB Bank - Project Multichannel"
            date="2011 - 2016, Bratislava"
            title="Senior Programmer/Analyst"
            headerStyle="work__header work__header--vub"
          >
            <WorkContentItem
              projectText="In prime most important project in VUB Bank (Intesa San Paolo), big solution for capturing
                            all bank channels including completely new Internet Banking"
              responsibilityText="Modeling, managing, developing (from BE to FE) and responsibility for frontend flows and
                            components in particular areas, implementing frontend logic for all SEPA payment screens,
                            technical support, honoured as the Key Employee in VUB Bank"
              technologies={[]}
            />
          </TimelineItem>

          <TimelineItem
            headerText="VUB Bank - Project SSV"
            date="2010 - 2011, Bratislava"
            title="Junior Programmer"
            headerStyle="work__header work__header--vub"
          >
            <WorkContentItem
              projectText="Information system for bank branches providing sales of all bank products"
              responsibilityText="Implementing frontend screens, developing and managing application for simulating mortgages,
                            programming based on specification"
              technologies={["J2EE", "JSF", "Vaadin", "EJB", "JAXB", "JUnit", "SQL", "XML", "XSLT", "XSLT-FO", "HTML", "CSS", "Javascript"]}
            />
          </TimelineItem>

          <TimelineItem
            headerText="Posam - Project Cognisance"
            date="2009 - 2010, Bratislava"
            title="Junior Java Programmer"
            headerStyle="work__header work__header--posam"
          >
            <WorkContentItem
              projectText="Internal knowledge based application for storing and managing documents"
              responsibilityText="Design and implementation of special graph feature for managing documents"
              technologies={["Java", "JUNG", "Applet", "Servlets", "Javascript", "Hibernate"]}
            />
          </TimelineItem>

          <TimelineItem
            headerText="Posam - Project Allianz"
            date="2008 - 2009, Bratislava"
            title="Junior Java Programmer"
            text="8 years high school focused on foreign languages"
            headerStyle="work__header work__header--posam"
          >
            <WorkContentItem
              projectText="Information system for evidence various insurances"
              responsibilityText="Implementing server-domain objects based on diagrams, programming, bug
        fixing on frontend and backend side"
              technologies={["J2EE", "Wicket", "Hibernate", "JUnit"]}
            />
          </TimelineItem>
        </VerticalTimeline>
      </div>
    </div>
  )
}

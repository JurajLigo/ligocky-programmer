import React from "react"
import { VerticalTimeline } from "react-vertical-timeline-component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TimelineItem } from "../common/timelineItem"
import { WorkContentItem } from "./workContentItem"
import "react-vertical-timeline-component/style.min.css"
import "../base.scss"
import "./work.scss"

export const Work = () => {
  const WorkIcon = <FontAwesomeIcon icon="briefcase" size="2x" />

  return (
    <div className="work">
      <div className="base-container">
        <h1 className="title">WORK EXPERIENCES</h1>
        <p className="subtitle">My working experiences</p>

        <VerticalTimeline>
          <TimelineItem
            headerText="GoHealth - Project GoHealth"
            date="2019 - present, Bratislava"
            title="Software Engineer"
            headerStyle="work__header work__header--gohealth"
            icon={WorkIcon}
          >
            <WorkContentItem
              projectText="Health care system which provides the end-to-end care solution"
              responsibilityText="Developing frontend components for showing health insurance plans in marketplace, parsing carrier data files and save data
to database, implementing frontend components for A/B testing using google optimize, working with top american software engineers"
              technologies={[
                "React",
                "Redux",
                "Typescript",
                "Javascript",
                "HTML/CSS",
                "Sass",
                "BEM",
                "Jasmine",
                "Enzyme",
                "Java",
                "Spring",
                "JUnit",
                "Python"
              ]}
            />
          </TimelineItem>

          <TimelineItem
            headerText="Erste - Project EMIL"
            date="2017 - 2018 (1 year and 9 months), Vienna"
            title="Senior Frontend Developer"
            headerStyle="work__header work__header--erste"
            icon={WorkIcon}
          >
            <WorkContentItem
              projectText="Content management system, serving more than 200 web portals with millions of monthly
                            visitors and over 300 content editors in various countries"
              responsibilityText="Implementation of social communities components (polls, profile, login) and components for non-governmental business from scratch, implementation of
                            completely new mobile header optimized and configurable for 200 web pages, programming frontend
                            components based on specification"
              technologies={[
                "React",
                "Redux",
                "Javascript",
                "Typescript",
                "HTML/CSS",
                "Sass",
                "JQuery",
                "BEM",
                "AEM"
              ]}
            />
          </TimelineItem>

          <TimelineItem
            headerText="Touch4IT - Project CitySonder"
            date="2016 - 2017 (6 months), Bratislava"
            title="Fullstack Web Developer"
            headerStyle="work__header work__header--touch-four-it"
            icon={WorkIcon}
          >
            <WorkContentItem
              projectText="The web application offers guided city tours around the world, where each tour is
                            custom-made for the user"
              responsibilityText="Implementing paging, sorting and filtering for all tables in application"
              technologies={[
                "Angular 2",
                "Javascript",
                "Typescript",
                "HTML/CSS",
                "Bootstrap",
                "Node.js"
              ]}
            />
          </TimelineItem>

          <TimelineItem
            headerText="VUB Bank - Project Multichannel"
            date="2011 - 2016 (5 years), Bratislava"
            title="Senior Programmer/Analyst"
            headerStyle="work__header work__header--vub"
            icon={WorkIcon}
          >
            <WorkContentItem
              projectText="In prime most important project in VUB Bank (Intesa San Paolo), big solution for capturing
                            all bank channels including completely new Internet Banking"
              responsibilityText="Modeling, managing, developing (from BE to FE) and responsibility for frontend flows and
                            components in particular areas, implementing frontend logic for all SEPA payment screens,
                            technical support, honoured as the Key Employee in VUB Bank"
              technologies={[
                "MDA",
                "Javascript",
                "JQuery",
                "HighCharts",
                "HTML/CSS",
                "Web Services",
                "XML",
                "XQuery",
                "Wicket",
                "JUnit",
              ]}
            />
          </TimelineItem>

          <TimelineItem
            headerText="VUB Bank - Project SSV"
            date="2010 - 2011 (1 year), Bratislava"
            title="Junior Programmer"
            headerStyle="work__header work__header--vub"
            icon={WorkIcon}
          >
            <WorkContentItem
              projectText="Information system for bank branches providing sales of all bank products"
              responsibilityText="Implementing frontend screens, developing and managing application for simulating mortgages,
                            programming based on specification"
              technologies={[
                "J2EE",
                "JSF",
                "Vaadin",
                "EJB",
                "JAXB",
                "JUnit",
                "SQL",
                "XML",
                "XSLT",
                "XSLT-FO",
                "HTML/CSS",
                "Javascript",
              ]}
            />
          </TimelineItem>

          <TimelineItem
            headerText="Posam - Project Cognisance"
            date="2009 - 2010 (1 year), Bratislava"
            title="Junior Java Programmer"
            headerStyle="work__header work__header--posam"
            icon={WorkIcon}
          >
            <WorkContentItem
              projectText="Internal knowledge based application for storing and managing documents"
              responsibilityText="Design and implementation of special graph feature for managing documents"
              technologies={[
                "Java",
                "JUNG",
                "Applet",
                "Servlets",
                "Javascript",
                "Hibernate",
              ]}
            />
          </TimelineItem>

          <TimelineItem
            headerText="Posam - Project Allianz"
            date="2008 - 2009 (6 months), Bratislava"
            title="Junior Java Programmer"
            text="8 years high school focused on foreign languages"
            headerStyle="work__header work__header--posam"
            icon={WorkIcon}
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

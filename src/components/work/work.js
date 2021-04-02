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

        <VerticalTimeline animate={false}>
          <TimelineItem
            headerText="GoHealth - Project GoHealth"
            date="2019 - present, Bratislava"
            title="Senior Software Engineer"
            headerStyle="work__header work__header--gohealth"
            icon={WorkIcon}
          >
            <WorkContentItem
              projectText="Leading health insurance marketplace in USA"
              responsibilities={[
                "developing frontend components for showing health insurance plans in marketplace",
                "implementing experimental pages for A/B testing",
                "introducing new custom React hooks to improve codebase",
                "working on gohealth.com and cooperating on creating completely new gohealth.sk",
                "parsing carrier data files and save them to database",
                "working with top american software engineers",
              ]}
              technologies={[
                "React",
                "Typescript",
                "Javascript",
                "HTML/CSS",
                "Redux(Saga)",
                "Sass",
                "BEM",
                "Jasmine",
                "Enzyme",
                "Java",
                "Spring",
                "JUnit",
                "Python",
                "PHP",
                "WordPress",
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
              responsibilities={[
                "implementation of social communities components (polls, profile, login)",
                "working from scratch on whole frontend part for non-governmental business",
                "implementation of completely new mobile header optimized and configurable for 200 web pages",
                "refactor old JQuery code to React",
              ]}
              technologies={[
                "React",
                "Javascript",
                "Typescript",
                "HTML/CSS",
                "Sass",
                "Redux",
                "JQuery",
                "BEM",
                "AEM",
                "REST",
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
              responsibilities={[
                "implementing paging, sorting and filtering for all tables in application",
                "developing backend and frontend based on the specification",
              ]}
              technologies={[
                "Angular 2",
                "Javascript",
                "Typescript",
                "HTML/CSS",
                "Bootstrap",
                "Node.js",
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
              projectText="Big solution for capturing all bank channels including completely new Internet Banking. In prime most important project in VUB Bank (Intesa San Paolo)"
              responsibilities={[
                "honoured as the Key Employee in VUB Bank",
                "implementing frontend logic for all SEPA payment screens",
                "developing new HighCharts features",
                "modeling and managing flows and components in particular areas",
                "technical support",
              ]}
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
              responsibilities={[
                "implementing frontend screens",
                "developing and managing application for simulating mortgages",
                "developing based on specification",
              ]}
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
              responsibilities={[
                "design and implementation of special graph feature for managing documents",
                "developing backend and frontend based on the specification",
              ]}
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
              responsibilities={[
                "implementing server-domain objects based on diagrams",
                "bugfixing on frontend and backend side",
              ]}
              technologies={["J2EE", "Wicket", "Hibernate", "JUnit"]}
            />
          </TimelineItem>
        </VerticalTimeline>
      </div>
    </div>
  )
}

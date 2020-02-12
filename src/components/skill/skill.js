import React from "react"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import { Frontend } from "./frontend"
import { Backend } from "./backend"
import "../base.scss"
import "./skill.scss"
import 'react-tabs/style/react-tabs.css'

export const Skill = () => {
  return (
    <div className="skill">
      <div className="base-container">
        <h1 className="title">SKILLS</h1>
        <p className="subtitle">My technology stack</p>
        <Tabs>
          <TabList>
            <Tab>Frontend</Tab>
            <Tab>Backend</Tab>
            <Tab>Other Skills</Tab>
          </TabList>
          <hr className="skill__line" />
          <TabPanel>
           <Frontend />
          </TabPanel>
          <TabPanel>
          <Backend />
        </TabPanel>
          <TabPanel>
            <div className="skill__section">
            <ul className="skill__list">
              <li className="skill__list-item">good knowledge of working with Git</li>
              <li className="skill__list-item">good communication skills</li>
              <li className="skill__list-item">experiences with SCRUM</li>
              <li className="skill__list-item">experiences with SOA, MDA, BPM</li>
            </ul>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

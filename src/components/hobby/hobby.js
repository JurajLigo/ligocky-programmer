import * as React from "react"
import "./hobby.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Hobby = () => {
  return (
    <div className="hobby">
      <div className="base-container">
        <h1 className="title">Hobbies</h1>
        <p className="subtitle">What i like</p>
        <div className="hobby__wrapper">
          <div className="hobby__box">
            <div className="hobby__content">
              <FontAwesomeIcon icon="basketball-ball" size="3x" />
              <p className="hobby__text">Basketball and streetball</p>
            </div>
          </div>
          <div className="hobby__box">
            <div className="hobby__content">
              <FontAwesomeIcon icon="bicycle" size="3x" />
              <p className="hobby__text">Biking in the city</p>
            </div>
          </div>
          <div className="hobby__box">
            <div className="hobby__content">
              <FontAwesomeIcon icon="book-open" size="3x" />
              <p className="hobby__text">Reading books</p>
            </div>
          </div>
          <div className="hobby__box">
            <div className="hobby__content">
              <FontAwesomeIcon icon="plane" size="3x" />
              <p className="hobby__text">Traveling on my own</p>
            </div>
          </div>
          <div className="hobby__box">
            <div className="hobby__content">
              <FontAwesomeIcon icon="dumbbell" size="3x" />
              <p className="hobby__text">Fitness</p>
            </div>
          </div>
          <div className="hobby__box">
            <div className="hobby__content">
              <FontAwesomeIcon icon="baby" size="3x" />
              <p className="hobby__text">Spending time with family</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

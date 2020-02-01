import React from "react"
import PropTypes from "prop-types"
import "../base.scss"
import "./score.scss"

export const Score = props => {
  const {value, limit} = props;
  let items = [];

  for (let step = 1; step <= limit; step++) {
    if (step <= value) {
      items.push(<span key={step} className="score__item score__item--fill"></span>)
    } else {
      items.push(<span key={step} className="score__item"></span>)
    }
  }

  return (
    <div className="score">
      {items}
    </div>
  )
}

Score.propTypes = {
  value: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired
}

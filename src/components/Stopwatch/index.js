// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="heading"> Stopwatch </h1>
        <div className="stop-watch-card">
          <div className="watch">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="logo"
            />
            <p className="timer-text"> Timer </p>
          </div>
          <p className="timer"> 00:00 </p>
          <div className="watch">
            <button type="button" className="start-btn">
              Start
            </button>
            <button type="button" className="stop-btn">
              Stop
            </button>
            <button type="button" className="reset-btn">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

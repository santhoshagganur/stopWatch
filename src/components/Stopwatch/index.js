// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {seconds: 0, minutes: 0}

  tick = () => {
    this.setState(prevState => {
      const {seconds} = prevState
      return {seconds: seconds + 1}
    })
  }

  startTimer = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  renderTimer = () => {
    const {seconds} = this.state

    if (seconds > 59) {
      this.setState(prevState => {
        const {minutes} = prevState
        const remainingMinutes = Math.floor(seconds / 60)
        const remainingSeconds = Math.floor(seconds % 60)
        return {minutes: minutes + remainingMinutes, seconds: remainingSeconds}
      })
    }
  }

  renderStringifiedTimer = () => {
    const {minutes, seconds} = this.state
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({seconds: 0, minutes: 0})
  }

  render() {
    this.renderTimer()

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
          <h1 className="timer"> {this.renderStringifiedTimer()} </h1>
          <div className="watch">
            <button
              type="button"
              className="start-btn"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button type="button" className="stop-btn" onClick={this.stopTimer}>
              Stop
            </button>
            <button
              type="button"
              className="reset-btn"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

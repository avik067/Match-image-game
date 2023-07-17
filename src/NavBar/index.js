// Write your code here.

import './index.css'

const NavBar = props => {
  const {score} = props

  return (
    <nav className="nav row-space-between">
      <div className="row">
        <img
          className="gamelogo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </div>

      <div className="score-div row">
        <p className="score">Score: {score}</p>
        <div className="row">
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="timer"> 0</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
